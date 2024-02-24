import React, {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import * as API from '~/constants/api'
import { PROFILE_URL, ROOT_URL } from '~/constants/routes'
import { getLocale, getToken, removeToken, setToken } from '~/utils/cookies'
import transformResponse from '~/utils/transformResponse'
import { useCreate } from '~/hooks/crud'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  transformResponse: [transformResponse]
})

function setApiHeaders (token) {
  api.defaults.headers.Authorization = `${process.env.NEXT_PUBLIC_TOKEN_TYPE} ${token}`
  api.defaults.headers['Accept-Language'] = getLocale()
}

const defaultState = {
  isAuth: false,
  user: null,
  isUserLoading: false,
  isLoading: false,
  logoutLoading: false,
  onLogin: null,
  onLogout: null,
  onUpdateUser: null,
  fetchUserInfo: null
}

const AuthContext = createContext(defaultState)

function AuthProvider (props) {
  const { children } = props

  const { query, ...router } = useRouter()

  const [user, setUser] = useState(null)
  const [isUserLoading, setIsUserLoading] = useState(true)
  const [logoutLoading, setLogoutLoading] = useState(false)

  const loginCreate = useCreate(API.LOGIN)

  const { redirectUrl, code } = query

  const token = getToken()

  function fetchUserInfo () {
    return api.get(API.ME)
      .then(resp => {
        const data = resp.data
        setUser(data)
      })
  }

  // fetch user info on browser tab is visible
  useEffect(() => {
    const onFocus = (event) => {
      if (event.target.visibilityState === 'visible') {
        if (user) fetchUserInfo()
      }
    }

    document.addEventListener('visibilitychange', onFocus)

    return () => {
      document.removeEventListener('visibilitychange', onFocus)
    }
  }, [user?.id])

  // check if user has token & fetch info if so
  useEffect(() => {
    function loadUserFromCookies () {
      if (token) {
        setApiHeaders(token)
        fetchUserInfo()
          .then(() => {
            setIsUserLoading(false)
          })
          .catch(() => {
            setIsUserLoading(false)
            return onLogout()
          })
      }
      else {
        setIsUserLoading(false)
      }
    }

    loadUserFromCookies()
  }, [token])

  const onLogin = useCallback((formValues) => {
    return loginCreate.create(formValues)
      .then(({ token }) => {
        setApiHeaders(token)
        setToken(token)

        if (typeof redirectUrl === 'string') {
          router.replace(redirectUrl)
          return
        }
        router.replace(PROFILE_URL)
      })
  }, [redirectUrl])

  const onLogout = useCallback(() => {
    setLogoutLoading(true)
    return api.get(API.LOGOUT)
      .then(() => {
        setLogoutLoading(false)
        removeToken()
        window.location.replace(ROOT_URL)
      })
      .catch(() => {
        setLogoutLoading(false)
      })
  }, [logoutLoading])

  const onUpdateUser = useCallback((data) => {
    setUser(prev => ({ ...prev, ...data }))
  }, [])

  const authProps = {
    // isAuth: !!user,
    isAuth: true,
    user: {
      firstName: 'Николай',
      lastName: 'Джураев',
      patronymicName: 'Сергеевич',
      phoneNumber: '+998903456789',
      username: 'Admin',
      country: {
        id: 1, name: 'США'
      }
    },
    isUserLoading,
    isLoading: loginCreate.isLoading,
    logoutLoading,
    onLogin,
    onLogout,
    onUpdateUser,
    fetchUserInfo
  }

  return (
    <AuthContext.Provider value={authProps}>
      {code
        ? <div>Redirecting...</div>
        : (
          <Fragment>
            {children}
          </Fragment>
        )}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  return useContext(AuthContext)
}

export { AuthProvider }

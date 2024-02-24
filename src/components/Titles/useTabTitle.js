import { useState, useCallback } from 'react'

export default function useTabTitle ({ tabs = [], initialTab }) {
  const [tab, setTab] = useState(initialTab)

  const onChangeTab = useCallback(value => {
    setTab(value)
  }, [])

  return {
    tab,
    onChangeTab
  }
}

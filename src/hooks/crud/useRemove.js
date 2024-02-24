import useDeleteApi from '../api/useDeleteApi'

export default function useRemove () {
  const state = useDeleteApi()

  return { ...state, remove: state.delete }
}

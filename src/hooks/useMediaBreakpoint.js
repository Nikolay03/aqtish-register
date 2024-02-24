import { useMediaQuery, useToken } from '@chakra-ui/react'

export default function useMediaBreakpoint ({ breakpoint, invert }) {
  const mediaBreakpoint = useToken('breakpoints', breakpoint)
  const [isLargerThanBreakpoint] = useMediaQuery(`(min-width: ${mediaBreakpoint})`)

  if (invert) return !isLargerThanBreakpoint

  return isLargerThanBreakpoint
}

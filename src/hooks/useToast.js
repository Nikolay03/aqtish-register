import { useToast as useChakraToast } from '@chakra-ui/react'

export default function useToast (params) {
  return useChakraToast({
    duration: 5000,
    isClosable: true,
    position: 'top-left',
    variant: 'solid',
    ...params
  })
}

import { useEffect, useRef } from 'react'
import {
  Button,
  HStack,
  useClipboard,
  VStack,
  Text
} from '@chakra-ui/react'

export default function Actions() {
  const value = 'https://apple.com/cook'
  const { hasCopied, onCopy } = useClipboard(value)

  const profileUrl = useRef(null)


  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus()
      profileUrl.current.select()
    }
  })

  return (
    <VStack py={8} px={5} spacing={3}>
      <Button w="full" variant="outline">
        Update Profile
      </Button>
    </VStack>
  )
}

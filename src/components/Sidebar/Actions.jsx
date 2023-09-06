import { useEffect, useRef } from 'react'
import {
  Button,
  HStack,
  useClipboard,
  VStack,
  Text,
  useToast
} from '@chakra-ui/react'
import { setToast } from '../../utils/extraFunctions'

export default function Actions() {
  const value = 'https://apple.com/cook'
  const { hasCopied, onCopy } = useClipboard(value)
  const toast = useToast()

  const profileUrl = useRef(null)


  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus()
      profileUrl.current.select()
    }
  })

  const handleUndateProfile = () => {
    setToast(toast, "This functionality is under development", "success")
  }

  return (
    <VStack py={8} px={5} spacing={3}>
      <Button w="full" variant="outline" onClick={handleUndateProfile}>
        Update Profile
      </Button>
    </VStack>
  )
}

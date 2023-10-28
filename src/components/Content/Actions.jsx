import { Box, Button, useToast } from '@chakra-ui/react'
import { setToast } from '../../utils/extraFunctions';

export default function Actions() {

  const toast = useToast();

  const handleUndateProfile = () => {
    setToast(toast, "This functionality is under development", "success")
  }

  return (
    <Box mt={5} py={8} px={0} borderTopWidth={1} borderColor="brand.light">
      <Button color={"white"}
        bgColor={"rgb(0,0,0)"}
        _hover={{
          boxShadow: "xl",
        }} onClick={handleUndateProfile}>Update</Button>
    </Box>
  )
}


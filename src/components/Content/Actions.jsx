import { Box, Button } from '@chakra-ui/react'

export default function Actions() {
  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button color={"white"}
        bgColor={"rgb(0,0,0)"}
        _hover={{
          boxShadow: "xl",
        }}>Update</Button>
    </Box>
  )
}


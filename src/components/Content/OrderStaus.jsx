import {
  Text,
  Grid,
} from '@chakra-ui/react'

export default function OrderStaus() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <Text>Coming Soon...</Text>
    </Grid>
  )
}


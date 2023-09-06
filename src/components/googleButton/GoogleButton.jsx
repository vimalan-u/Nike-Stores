import { FcGoogle } from 'react-icons/fc'
import { Button, Center, Text } from '@chakra-ui/react'

function GoogleButton({ name, handleGoogleLogin }) {
    return (
        <Center>
            <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />} onClick={handleGoogleLogin}>
                <Center>
                    <Text>{name} with Google</Text>
                </Center>
            </Button>
        </Center>
    )
}

export default GoogleButton;
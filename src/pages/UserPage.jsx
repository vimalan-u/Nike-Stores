import { Container, Box } from '@chakra-ui/layout'
import Sidebar from '../components/Sidebar/Sidebar'
import Content from '../components/Content/Content'


export default function UserPage() {
    return (
        <>
            <Box marginTop={["70px", "70px", "70px", "70px", "70px"]}></Box>
            <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl" py={10}>
                <Sidebar />
                <Content />
            </Container>
            <Box marginTop={["-90px", "-90px", "-70px", "-70px", "-70px"]}></Box>
        </>
    )
}
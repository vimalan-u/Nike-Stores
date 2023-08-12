import { Container, Spinner } from "@chakra-ui/react";


export const Loading = () => {
    return (
        <Container
            my={'140px'}
            display={'flex'}
            justifyContent={'center'}
            height={"30vh"}
        >
            <Spinner size='xl' />
        </Container>
    );
};
import { Box, Slide, HStack, Spinner, Text } from "@chakra-ui/react";
import React from "react";

function NoInternet({ isOnline }) {

    return (

        <Slide direction='bottom' in={!isOnline} style={{ zIndex: 10 }}>
            <Box
                p='15px'
                color='white'
                mt='4'
                fontSize={"xl"}
                fontWeight={"bold"}
                sx={{
                    backdropFilter: 'blur(16px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                    backgroundColor: 'rgba(17, 25, 40, 0.75)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.125)'
                }}
            >
                <HStack justify={"space-between"} align={"center"}>
                    <Text>Check Your Internet Connection...</Text>
                    <Spinner thickness='4px'
                        speed='0.95s'
                        emptyColor='gray.700'
                        size='lg'
                        mr={5}
                    />
                </HStack>
            </Box>
        </Slide>
    );
}

export default NoInternet;

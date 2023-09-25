import { Center, Icon, Text, useColorMode, Box, Input } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';


export const Category = ({ text, link, name }) => {
    const { colorMode } = useColorMode();
    const location = useLocation()
    return (
        <Center
            h={'60px'}
            cursor={'pointer'}
            paddingX={'15px'}
            _hover={{ borderBottom: location.pathname === "/" ? "2px solid white" : `2px solid ${colorMode === 'light' ? 'black' : 'white'}` }}
            fontSize={"17px"}
        >
            <Link
                to={link}
                name={name}
            >
                {text}
            </Link>
        </Center>
    );
};


export const DrawerCategory = ({ text, link, name }) => {
    return (
        <Text fontSize={'20px'} fontWeight={500}>
            <Link
                to={link}
                name={name}
            >
                {text}
            </Link>
        </Text>
    );
};


export const NavIcon = ({ iconName }) => {
    const location = useLocation()
    return (
        <Icon
            as={iconName}
            w={'28px'}
            h={'28px'}
            color={location.pathname === "/" && "white"}
            mr={'10px'}
        />
    );
};


export const SearchBox = () => {
    const { colorMode } = useColorMode();
    return (
        <Center>
            <Box
                borderRadius={50}
                w={'220px'}
                color={colorMode === 'light' ? '#ced2d6' : "white"}
                bg={colorMode === 'light' ? '#ced2d6' : "transpernt"}
                textAlign={'left'}
                p={'0px 8px'}
                cursor={'text'}
                border={`2px solid ${colorMode === 'light' ? "transpernt" : '#ced2d6'}`}
            >
                <Center justifyContent={'left'} >
                    <Icon
                        color={colorMode === 'light' ? 'black' : "white"}
                        w={'25px'}
                        h={'25px'}
                        mr={'10px'}
                        as={AiOutlineSearch} />
                    <Input fontSize="16px"
                        _focus={{ borderColor: "none", boxShadow: "none" }}
                        _hover={{ borderColor: "none", boxShadow: "none" }}
                        border="none"
                        boxShadow="none"
                        placeholder="Search"
                        color={colorMode === 'light' ? 'black' : "white"}
                        _placeholder={{
                            color: colorMode === 'light' ? 'black' : 'white'
                        }}
                    />
                </Center>
            </Box>
        </Center>
    );
};
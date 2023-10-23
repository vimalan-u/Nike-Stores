import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlinePersonPin } from "react-icons/md";
import { IconLink } from "../components/footer/IconLink";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contactus");
  };
  return (
    <Box
      h={"270px"}
      bg={"black"}
      color={"white"}
      mt={"40px"}
      mb={0}
      w={"100% !important"}
    >
      <Grid
        h={"220px"}
        p={"10px"}
        pt={5}
        templateColumns={["100%", "100%", "48% 2% 50%", "25% 25% 50%"]}
        gridTemplateRows={["1fr 1fr", "1fr 1fr", "1fr", "1fr"]}
        gridAutoFlow={["row", "row", "column", "column"]}
        alignItems={["center", "center", "start", "start"]}
      >
        <Center>
          <Flex
            fontSize={["11px", "13px", "14px", "14px", "14px"]}
            gap={"10px"}
            fontWeight={600}
            flexDirection={"column"}
          >
            <Text onClick={contact} cursor={"pointer"}>
              FIND A NEARBY STORE
            </Text>
            <Text onClick={contact} cursor={"pointer"}>
              BECOME A MEMBER
            </Text>
            <Text onClick={contact} cursor={"pointer"}>
              ALREADY A MEMBER
            </Text>
            <Text onClick={contact} cursor={"pointer"}>
              SIGNUP FOR EMAIL
            </Text>
            <Text onClick={contact} cursor={"pointer"}>
              SEND US FEEDBACK
            </Text>
          </Flex>
        </Center>

        <Center>
          <Flex
            display={["none", "none", "none", "flex", "flex"]}
            fontSize={"14px"}
            gap={"10px"}
            flexDirection={"column"}
            color={"gray"}
          >
            <Text
              color={"white"}
              fontWeight={600}
              onClick={contact}
              cursor={"pointer"}
            >
              GET HELP
            </Text>
            <Text onClick={() => navigate("/userprofile")} cursor={"pointer"}>
              Order Status
            </Text>
            <Text onClick={() => navigate("/userprofile")} cursor={"pointer"}>
              Delivery
            </Text>
            <Text onClick={() => navigate("/userprofile")} cursor={"pointer"}>
              Returns
            </Text>
            <Text onClick={() => navigate("/userprofile")} cursor={"pointer"}>
              Payment Options
            </Text>
          </Flex>
        </Center>

        <Flex
          gap={"15px"}
          flexDirection={"row-reverse"}
          justifyContent={["center", "center", "right", "right", "right"]}
          color={"gray"}
          mr={["0px", "0px", "80px", "80px", "80px"]}
          mt={["40px", "40px", "20px", "20px", "20px"]}
        >
          <IconLink
            icon={MdOutlinePersonPin}
            link={"https://venketeshrushi.github.io/Portfolio/"}
          />
          <IconLink
            icon={FaGithub}
            link={"https://github.com/VenketeshRushi"}
          />
          <IconLink
            icon={FaLinkedin}
            link={"https://www.linkedin.com/in/venketesh-rushi-423722236/"}
          />
        </Flex>
      </Grid>
    </Box>
  );
};

export default Footer;

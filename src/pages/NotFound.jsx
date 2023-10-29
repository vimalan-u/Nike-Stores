import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound({ data }) {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" height={"65vh"} py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2x1"
        bgGradient="linear (to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"white"} mb={6}>
        The page you&apos; re looking for does not seem to exist
        {data !== "Page Not Found!" && data!==null && (
          <Text mt={3} color={"red.400"}>
            Error: {data}
          </Text>
        )}
      </Text>

      <Button
        color={"white"}
        bgColor={"rgb(0,0,0)"}
        _hover={{
          boxShadow: "xl",
        }}
        variant="solid"
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
}

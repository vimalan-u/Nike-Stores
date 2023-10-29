import { Text } from "@chakra-ui/react";

export const HomeText = ({ children }) => {
  return (
    <Text
      fontWeight={600}
      letterSpacing={2}
      fontFamily={"'Anton', sans-serif"}
      fontSize={["25px", "30px", "40px", "45px", "50px"]}
      mb={3}
    >
      {children}
    </Text>
  );
};

export const HomeDescText = ({ children }) => {
  return (
    <Text
      mb={["22px"]}
      px={["10px", "15px", "30px", "50px", "100px"]}
      fontSize={["18px", "18px", "20px", "22px", "25px"]}
    >
      {children}
    </Text>
  );
};

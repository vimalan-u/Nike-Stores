import React from "react";
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Box,
  Icon,
} from "@chakra-ui/react";

export default function MiniStatistics(props) {
  const { name, value, icon } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("whiteAlpha.100", "secondaryGray.300");

  return (
    <Box py="15px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        <Icon w="32px" h="32px" as={icon} color={brandColor} />

        <Stat my="auto" ms={icon ? "18px" : "0px"}>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}
          >
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}
          >
            {value}
          </StatNumber>
        </Stat>
      </Flex>
    </Box>
  );
}

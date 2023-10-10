import React from "react";
import {
  Box,

  Flex,

  SimpleGrid,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import {
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import OrderChart from "../../srcADMIN/components/Dashboard/OrderChart";
import MiniStatistics from "../../srcADMIN/components/Dashboard/MiniStatistics";

function Dashboard() {

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");


  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 3, "2xl": 3 }}
        gap="20px"
        mb="20px"
        pl={10}
        justifyContent={"space-between"}
      >
        <MiniStatistics
          startContent={
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"50%"}
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={"blue"} />
              }
            />
          }
          name="Earnings"
          value="$350.4"
        />
        <MiniStatistics
          startContent={
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"50%"}
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdAttachMoney}
                  color={brandColor}
                />
              }
            />
          }
          name="Total Products"
          value="824"
        />
        <MiniStatistics
          startContent={
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"50%"}
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdFileCopy}
                  color={brandColor}
                />
              }
            />
          }
          name="Total Customers"
          value="2935"
        />
      </SimpleGrid>

      <OrderChart />
    </Box>
  );
}

export default React.memo(Dashboard);

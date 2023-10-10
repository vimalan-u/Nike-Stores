import React from "react";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdBarChart, MdAttachMoney, MdFileCopy } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import OrderChart from "../../srcADMIN/components/Dashboard/OrderChart";
import MiniStatistics from "../../srcADMIN/components/Dashboard/MiniStatistics";

function Dashboard() {
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
          name="Earnings"
          value="$350.4"
          icon={MdBarChart}
        />
        <MiniStatistics
          name="Total Products"
          value="824"
          icon={MdAttachMoney}
        />
        <MiniStatistics
          name="Total Customers"
          value="2935"
          icon={FiUsers }
        />
      </SimpleGrid>

      <OrderChart />
    </Box>
  );
}

export default Dashboard;

import React from "react";
import { VStack } from "@chakra-ui/react";
import Allorders from "../../pages/Allorders";

const OrderStatus = () => {
  return (
    <VStack overflowY={"auto"} minH={"355px"} maxH={"455px"}>
      <Allorders />
    </VStack>
  );
};

export default React.memo(OrderStatus);

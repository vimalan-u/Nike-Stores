import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import {  } from "../../utils/extraFunctions";
import { OrderPageText } from "./OrderPageText";
import { dateFormater } from "../../utils/dateFormatorFunction";

export const Summary = ({
  subTotal,
  discount,
  quantity,
  total,
  shipping,
  createdAt,
  orderId,
  razorpayPaymentId,
}) => {

  const { date, time } = dateFormater(createdAt);

  return (
    <>
      <Box py={"15px"} px={"25px"}>
        <Text fontSize={"20px"} fontWeight={600}>
          Summary
        </Text>

        <Divider />

        <Flex
          flexDirection={"column"}
          gap={"5px"}
          my={"20px"}
          fontSize={"18px"}
        >
          <OrderPageText name={"Order Date"} value={date} />

          <OrderPageText name={"Order Time"} value={time} />

          <Divider my={"10px"} />

          <OrderPageText name={"Order ID"} value={orderId} />

          <OrderPageText name={"Payment ID"} value={razorpayPaymentId} />

          <Divider my={"10px"} />

          <OrderPageText
            name={"Subtotal"}
            value={`₹${(subTotal)}.00`}
          />

          <OrderPageText name={"Quantity"} value={quantity} />

          <Flex justifyContent={"space-between"}>
            <Text>Estimated Delivery</Text>
            <Text
              title={"Free delivery applies to orders of ₹14,000 or more"}
              cursor={"pointer"}
            >
              ₹{(shipping)}.00
            </Text>
          </Flex>

          <OrderPageText
            name={"Discount"}
            value={`₹${(discount)}.00`}
          />

          <Divider my={"10px"} />

          <OrderPageText
            name={"Total"}
            value={`₹${(total)}.00`}
          />
        </Flex>
      </Box>
    </>
  );
};

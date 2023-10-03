import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { numberWithCommas, shortString } from "../../utils/extraFunctions";
import { DescText, PriceText } from "./DescText";

export const ProductDisplayBox = ({
  title,
  description,
  color,
  ratings,
  price,
  size,
  gender,
  img,
  onClick,
}) => {
  // console.log("ratings",ratings)
  return (
    <>
      <Flex
        onClick={onClick}
        flexDirection={"column"}
        cursor="pointer"
        mb={"10px"}
      >
        <Box overflow={"hidden"}>
          <Image className="imgAnimation" src={img[0]} />
        </Box>
        <Box>
          <Flex justifyItems={"center"} mt={"10px"}>
            <Text
              fontSize={["13px", "15px", "17px", "17px", "18px"]}
              fontWeight={600}
            >
              {shortString(title)}
            </Text>
            <Spacer />
            <Box
              fontSize={["13px", "15px", "17px", "17px", "18px"]}
              mr={"3px"}
              mt={"4px"}
            >
              <AiOutlineStar />
            </Box>
            <Text fontSize={["13px", "15px", "17px", "17px", "18px"]}>
              {ratings.reduce((acc, curr, index) => acc + index, 1) !== 1
                ? ratings.reduce((acc, curr, index) => acc + curr.rating, 0) /
                  ratings.length
                : 0}
            </Text>
          </Flex>

          <DescText>{shortString(description, 20)}</DescText>
          <DescText>{size.join(", ")}</DescText>
          <DescText>
            {gender}, {color} Colour
          </DescText>
          <PriceText>₹{numberWithCommas(price)}.00</PriceText>
        </Box>
      </Flex>
    </>
  );
};

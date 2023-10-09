import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Radio, HStack, Box } from "@chakra-ui/react";

export default function CollectStarsFromUser({
  reviewValue,
  setRating,
  count,
  size,
}) {
  // count:  number of stars you want, pass as props
  //size: size of star that you want
  const [hover, setHover] = useState(null);
  return (
    <HStack spacing={"2px"}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            as="label"
            key={index}
            color={ratingValue <= reviewValue.rating ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <Radio
              name="rating"
              onChange={() => {
                setRating({ ...reviewValue, rating: reviewValue.rating + 1 });
                count = count + 1;
              }}
              value={reviewValue.rating}
              d="none"
            ></Radio>
            <FaStar
              cursor={"pointer"}
              size={size || 20}
              transition="color 200ms"
            />
          </Box>
        );
      })}
    </HStack>
  );
}

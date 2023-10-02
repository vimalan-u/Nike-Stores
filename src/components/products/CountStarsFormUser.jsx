import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function CountStarsFormUser({
  reviewValue,
  setRating,
  count,
  size,
}) {
  // count:  number of stars you want, pass as props
  //size: size of star that you want

  const [hover, setHover] = useState(null);
  return (
    <Box className="star-container">
      {[...Array(count || 5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <FormControl id="reviewdes">
            <FormLabel>Review Description</FormLabel>
            <Input
              type="radio"
              name="rating"
              onChange={() => setRating({ ...reviewValue, rating: rating + 1 })}
              value={reviewValue.rating}
              //   sx={{ display: "none" }}
            />
            <FaStar
              cursor={"pointer"}
              size={size || 20}
              transition="color 200ms"
            />
          </FormControl>
        );
      })}
    </Box>
  );
}

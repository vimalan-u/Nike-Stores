import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function FreeCoupon() {
  const [couponPage, setCouponPage] = useState(null);

  useEffect(() => {
    const getCouponPage = async () => {
      try {
        let response = await axios.get("/");
        console.log("ejs Response: ", response);
        setCouponPage(response.data);
      } catch (error) {
        console.error("Error fetching coupon page:", error);
      }
    };

    getCouponPage();
  }, []);

  return (
    <Box
      minH={["60vh","60vh","60vh", "60vh","80vh","70vh"]}
      minW={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        minH={"100%"}
        minW={"100%"}
        dangerouslySetInnerHTML={{ __html: couponPage }}
      ></Box>
    </Box>
  );
}

export default FreeCoupon;

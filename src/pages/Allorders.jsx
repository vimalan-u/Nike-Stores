import {
  Accordion,
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Error } from "../components/loading/Error.jsx";
import { Loading } from "../components/loading/Loading.jsx";
import { useSelector } from "react-redux";
import { OrderSection } from "../components/order/OrderSection";
import { dateFormater } from "../utils/dateFormatorFunction.js";

export default function Allorders() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const token = useSelector((store) => store.auth.token);

  useEffect(() => {
    getOrderData();
  }, []);

  async function getOrderData() {
    try {
      setIsLoading(true);
      let { data } = await axios.get("/order/getorders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  }
  if (data.length === 0) {
    return (
      <Box>
        <Center h={"40vh"}>
          <Text fontSize={"20px"}>Your orders will be displayed here.</Text>
        </Center>
      </Box>
    );
  }

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : (
    <Accordion allowMultiple width={"100%"}>
      {data?.map((item,index) => {
        const { date, time } = dateFormater(item.createdAt);
        const uniqueKey = `${date}-${item.id}`;
        return (
          <OrderSection date={date} time={time} id={item.id} key={uniqueKey}>
            {" "}
            <Box>
              <Grid
                templateColumns={["100%", "100%", "100%", "50% 50%", "50% 50%"]}
                gap={["20px", "20px", "4%", "2%", "4%"]}
              >
                {" "}
                <Box py={"15px"} px={"25px"}>
                  <Text textAlign={"left"} fontSize={"20px"} fontWeight={600}>
                    Ordered Items
                  </Text>
                  <Divider mb={"20px"} />
                  {item.cartProducts.map((product,index) => (
                    <Grid
                      key={product.id+"-"+index}
                      templateColumns={"100px 60%"}
                      p={"5px"}
                    >
                      <Box w={"100px"} overflow={"hidden"}>
                        <Image src={product.img[0]} />
                      </Box>
                      <Center>
                        <Box textAlign={"left"} px={"20px"} w={"100%"}>
                          <Text fontWeight={600}>{product.title}</Text>
                          <Text>Price: ₹ {product.price}</Text>
                          <Text>Quantity: {product.quantity}</Text>
                        </Box>
                      </Center>
                    </Grid>
                  ))}
                </Box>
                {item.ShippingDetails.map((ele, index) => (
                  <Box key={ele.name} py={"15px"} px={"25px"}>
                    <Text textAlign={"left"} fontSize={"20px"} fontWeight={600}>
                      Shipping Address
                    </Text>

                    <Divider mb={"20px"} />

                    <Flex
                      flexDirection={"column"}
                      gap={"5px"}
                      my={"20px"}
                      fontSize={"18px"}
                    >
                      <Flex justifyContent={"space-between"}>
                        <Text>Full Name</Text>
                        <Text>{ele.name}</Text>
                      </Flex>
                      <Flex justifyContent={"space-between"}>
                        <Text>Email</Text>
                        <Text>{ele.email}</Text>
                      </Flex>
                      <Divider my={"10px"} />
                      <Flex justifyContent={"space-between"}>
                        <Text>Address</Text>
                        <Text>{ele.addressLine}</Text>
                      </Flex>
                      <Flex justifyContent={"space-between"}>
                        <Text>City</Text>
                        <Text>{ele.locality}</Text>
                      </Flex>
                      <Flex justifyContent={"space-between"}>
                        <Text>State</Text>
                        <Text>{ele.state}</Text>
                      </Flex>
                      <Flex justifyContent={"space-between"}>
                        <Text>Country</Text>
                        <Text>{ele.country}</Text>
                      </Flex>

                      <Divider my={"10px"} />
                    </Flex>
                  </Box>
                ))}
                <Box py={"15px"} px={"25px"}>
                  <Text textAlign={"left"} fontSize={"20px"} fontWeight={600}>
                    Summary
                  </Text>
                  <Divider />
                  <Flex
                    flexDirection={"column"}
                    gap={"5px"}
                    my={"20px"}
                    fontSize={"18px"}
                  >
                    <Flex justifyContent={"space-between"}>
                      <Text>Quantity</Text>
                      <Text>{item.quantity}</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"}>
                      <Text>Total</Text>
                      <Text>{item.total}</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Grid>
            </Box>
          </OrderSection>
        );
      })}
    </Accordion>
  );
}

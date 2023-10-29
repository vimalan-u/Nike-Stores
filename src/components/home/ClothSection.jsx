import { Box, Grid } from "@chakra-ui/react";
import { ClothGridBox } from "./GridBox";
import { HomeDescText, HomeText } from "./HomeText";
import { useNavigate } from "react-router-dom";

export const ClothSection = ({ clothData }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        m={"60px auto 60px"}
        w={["94%", "94%", "94%", "94%", "80%"]}
        textAlign={"center"}
        fontWeight={"bolder"}
      >
        <HomeText>Nike Unleash Your Potential</HomeText>
        {/* <HomeDescText>{description}</HomeDescText> */}

        <Grid
          gap={["10px", "10px", "10px", "10px", "20px"]}
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
        >
          <ClothGridBox
            source={clothData.a[0]?.image}
            onClick={() => {
              navigate(`/description/${clothData.a[0].id}`);
            }}
          />
          <ClothGridBox
            source={clothData.a[1]?.image}
            onClick={() => {
              navigate(`/description/${clothData.a[1].id}`);
            }}
          />
          <ClothGridBox
            source={clothData.a[2]?.image}
            onClick={() => {
              navigate(`/description/${clothData.a[2].id}`);
            }}
          />
          <ClothGridBox
            source={clothData.a[3]?.image}
            onClick={() => {
              navigate(`/description/${clothData.a[3].id}`);
            }}
          />
        </Grid>
      </Box>
      <Box
        m={"60px auto 60px"}
        w={["94%", "94%", "94%", "94%", "80%"]}
        textAlign={"center"}
        fontWeight={"bolder"}
      >
        <HomeText>Elevate Your Workout</HomeText>
        {/* <HomeDescText>{description}</HomeDescText> */}

        <Grid
          gap={["10px", "10px", "10px", "10px", "20px"]}
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
        >
          <ClothGridBox
            source={clothData.b[0]?.image}
            onClick={() => {
              navigate(`/description/${clothData.b[0].id}`);
            }}
          />
          <ClothGridBox
            source={clothData.b[1]?.image}
            onClick={() => {
              navigate(`/description/${clothData.b[1].id}`);
            }}
          />
          <ClothGridBox
            source={clothData.b[2]?.image}
            onClick={() => {
              navigate(`/description/${clothData.b[2].id}`);
            }}
          />
          <ClothGridBox
            source={clothData.b[3]?.image}
            onClick={() => {
              navigate(`/description/${clothData.b[3].id}`);
            }}
          />
        </Grid>
      </Box>
      <Box
        m={"60px auto 60px"}
        w={["94%", "94%", "94%", "94%", "80%"]}
        textAlign={"center"}
        fontWeight={"bolder"}
      >
        <HomeText>Gear Up and Just Do It!</HomeText>
        {/* <HomeDescText>{description}</HomeDescText> */}

        <Grid
          gap={["10px", "10px", "10px", "10px", "20px"]}
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
        >
          <ClothGridBox
            source={clothData.c[0]?.image}
            onClick={() => {
              navigate(`/description/${clothData.c[0].id}`);
            }}
          />
          <ClothGridBox
            source={clothData.c[1]?.image}
            onClick={() => {
              navigate(`/description/${clothData.c[1].id}`);
            }}
          />
          <ClothGridBox
            source={clothData.c[2]?.image}
            onClick={() => {
              navigate(`/description/${clothData.c[2].id}`);
            }}
          />
          <ClothGridBox
            source={clothData.c[3]?.image}
            onClick={() => {
              navigate(`/description/${clothData.c[3].id}`);
            }}
          />
        </Grid>
      </Box>
    </>
  );
};

import { Box, Grid } from "@chakra-ui/react";
import { ClothGridBox } from "./GridBox";
import { HomeText } from "./HomeText";
import { useNavigate } from "react-router-dom";
import HomeProductLoader from "../Loaders/HomeProductLoader";
import { Error } from "../loading/Error";
import { useSelector } from "react-redux";

export const ClothSection = () => {

  const { loading, error, clothDataHomepage } = useSelector(
    (state) => state.home
  );

  // console.log("Render Card clothDataHomepage", clothDataHomepage)

  const navigate = useNavigate();

  if (loading) {
    return (
      <>
        <HomeProductLoader />
        <HomeProductLoader />
        <HomeProductLoader />
      </>
    );
  }

  if (error || !clothDataHomepage || [...Object.keys(clothDataHomepage)].length <= 0) {
    return <Error />;
  }

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
            source={clothDataHomepage?.a[0]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.a[0].id}`);
            }}
          />
          <ClothGridBox
            source={clothDataHomepage?.a[1]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.a[1].id}`);
            }}
          />
          <ClothGridBox
            source={clothDataHomepage?.a[2]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.a[2].id}`);
            }}
          />
          <ClothGridBox
            source={clothDataHomepage?.a[3]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.a[3].id}`);
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
            source={clothDataHomepage?.b[0]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage.b[0].id}`);
            }}
          />
          <ClothGridBox
            source={clothDataHomepage?.b[1]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.b[1].id}`);
            }}
          />
          <ClothGridBox
            source={clothDataHomepage?.b[2]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.b[2].id}`);
            }}
          />
          <ClothGridBox
            source={clothDataHomepage?.b[3]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.b[3].id}`);
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
            source={clothDataHomepage?.c[0]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.c[0].id}`);
            }}
          />
          <ClothGridBox
            source={clothDataHomepage?.c[1]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.c[1].id}`);
            }}
          />
          <ClothGridBox
            source={clothDataHomepage?.c[2]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.c[2]?.id}`);
            }}
          />
          <ClothGridBox
            source={clothDataHomepage?.c[3]?.image}
            onClick={() => {
              navigate(`/description/${clothDataHomepage?.c[3].id}`);
            }}
          />
        </Grid>
      </Box>
    </>
  );
};

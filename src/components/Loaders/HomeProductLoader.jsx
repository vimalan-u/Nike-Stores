import { Box, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import React from "react";

function HomeProductLoader() {
  return (
    <Box m={"60px auto 60px"} w={["94%", "94%", "94%", "94%", "80%"]}>
      <Grid
        gap={["10px", "10px", "10px", "10px", "20px"]}
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        mt={3}
      >
        <GridItem
          cursor={"pointer"}
          borderRadius={"15px"}
          overflow={"hidden"}
          width="280px"
          height="320px"
        >
          <Skeleton height="100%" width="100%" />
        </GridItem>
        <GridItem
          cursor={"pointer"}
          borderRadius={"15px"}
          overflow={"hidden"}
          width="280px"
          height="320px"
        >
          <Skeleton height="100%" width="100%" />
        </GridItem>
        <GridItem
          cursor={"pointer"}
          borderRadius={"15px"}
          overflow={"hidden"}
          width="280px"
          height="320px"
        >
          <Skeleton height="100%" width="100%" />
        </GridItem>
        <GridItem
          cursor={"pointer"}
          borderRadius={"15px"}
          overflow={"hidden"}
          width="280px"
          height="320px"
        >
          <Skeleton height="100%" width="100%" />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default HomeProductLoader;

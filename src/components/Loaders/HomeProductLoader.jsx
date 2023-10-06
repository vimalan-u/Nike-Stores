import { Box, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import React from "react";

function HomeProductLoader() {
  return (
    <Box m={"60px auto 60px"} w={["94%", "94%", "94%", "94%", "80%"]}>
      <Grid
        mt={3}
        gap={["10px", "10px", "10px", "10px", "20px"]}
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
        <GridItem
          cursor={"pointer"}
          borderRadius={"15px"}
          overflow={"hidden"}
          aspectRatio={4 / 5}
        >
          <Skeleton height="100%" width="100%" />
        </GridItem>
        <GridItem
          cursor={"pointer"}
          borderRadius={"15px"}
          overflow={"hidden"}
          aspectRatio={4 / 5}
        >
          <Skeleton height="100%" width="100%" />
        </GridItem>
        <GridItem
          cursor={"pointer"}
          borderRadius={"15px"}
          overflow={"hidden"}
          aspectRatio={4 / 5}
        >
          <Skeleton height="100%" width="100%" />
        </GridItem>
        <GridItem
          cursor={"pointer"}
          borderRadius={"15px"}
          overflow={"hidden"}
          aspectRatio={4 / 5}
        >
          <Skeleton height="100%" width="100%" />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default HomeProductLoader;

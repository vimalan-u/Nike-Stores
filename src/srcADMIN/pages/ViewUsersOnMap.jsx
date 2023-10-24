import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import MapsComeponent from "../components/Maps/MapsComeponent";

function ViewUsersOnMap() {
  return (
    <Box width={"100%"} height={"100%"}>
      <MapsComeponent />
    </Box>
  );
}

export default React.memo(ViewUsersOnMap);

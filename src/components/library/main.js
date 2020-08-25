import React from "react";
import { Box } from "@chakra-ui/core";

const Main = ({ children }) => {
  return (
    <Box as="main" w="100%" h="100%" gridArea="main" bg="grey">
      {children}
    </Box>
  );
};

export default Main;

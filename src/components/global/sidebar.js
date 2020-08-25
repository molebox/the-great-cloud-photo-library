import React from "react";
import { Link as InternalLink } from "gatsby";
import { Box, Flex, Link } from "@chakra-ui/core";

const Sidebar = () => {
  return (
    <Box
      as="section"
      w="100%"
      maxW="200px"
      // marginX="5"
      p="10"
      gridArea="sidebar"
      bg="blue"
    >
      <Flex w="100%" h="100%" d="column" justify="space-between">
        <Link as={InternalLink} to="/">
          Home
        </Link>
        <Link as={InternalLink} to="/">
          Home
        </Link>
        <Link as={InternalLink} to="/">
          Home
        </Link>
        <Link as={InternalLink} to="/">
          Home
        </Link>
      </Flex>
    </Box>
  );
};

export default Sidebar;

import React from "react";
import { Link as InternalLink } from "gatsby";
import { Box, Flex, Link } from "@chakra-ui/core";

const Header = () => {
  return (
    <Box as="header" w="100%" p="10" gridArea="header" bg="red">
      <Flex as="nav" maxW="1440px" d="row" justify="space-between">
        <Link as={InternalLink} to="/">
          Home
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;

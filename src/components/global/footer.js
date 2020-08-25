import React from "react";
import { Link as InternalLink } from "gatsby";
import { Box, Flex, Link } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box as="footer" w="100%" gridArea="footer" bg="purple">
      <Flex w="100%" d="row" justify="space-between">
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

export default Footer;

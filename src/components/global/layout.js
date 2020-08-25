import React from "react";
import { Grid } from "@chakra-ui/core";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Main from "../library/main";

const Layout = ({ children }) => {
  return (
    <>
      <Grid
        h="100vh"
        // w="100%"
        // overflowX="hidden"
        templateAreas={`
        'sidebar     header      header      header'
        'sidebar     main      main      main'
        'sidebar     main      main      main'
        'sidebar     footer      footer      footer'
        `}
        templateColumns="200px repeat(3, 1fr)"
        templateRows="100px auto auto 100px"
      >
        <Header />
        <Sidebar />
        <Main>{children}</Main>
        <Footer />
      </Grid>
    </>
  );
};

export default Layout;

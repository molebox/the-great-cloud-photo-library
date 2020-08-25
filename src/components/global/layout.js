import React from 'react';
import {Box } from '@chakra-ui/core';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar'

const Layout = ({children}) => {

    return (
        <>
        <Box h="100vh" w="100%" bg="">
            <Header/>
            <Sidebar/>
            {children}
            <Footer/>
        </Box>
        </>
    )
}

export default Layout;
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
  useDarkLightBg,
  useDarkLightContentColor,
} from "../hooks/useColorModeValues";

export default function Home() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Head>
        <title>simc APL Builder</title>
        <meta name="description" content="simc APL Builder" />
      </Head>
      <Navbar />
      <Box bg={useDarkLightBg()} color={useDarkLightContentColor()} flex={1}>
        <Box as="main">
          <Container>
            <Heading>Welcome home</Heading>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
}

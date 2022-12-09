import { Box, Container, Flex, Text } from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
  useDarkLightBg,
  useDarkLightContentColor,
} from "../hooks/useColorModeValues";

export default function Home() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Navbar />
      <Box bg={useDarkLightBg()} color={useDarkLightContentColor()} flex={1}>
        <Box as="main">
          <Container>
            <Text>Welcome home</Text>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
}

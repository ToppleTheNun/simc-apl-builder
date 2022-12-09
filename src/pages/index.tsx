import { Navbar } from "../components/Navbar";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import {
  useMainContentBg,
  useMainContentColor,
} from "../hooks/useColorModeValues";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Navbar />
      <Box bg={useMainContentBg()} color={useMainContentColor()} flex={1}>
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

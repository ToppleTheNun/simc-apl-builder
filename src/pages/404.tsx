import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
  useDarkLightBg,
  useDarkLightColor,
  useDarkLightContentColor,
  useLightDarkBg,
} from "../hooks/useColorModeValues";

export default function NotFound() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Navbar />
      <Box bg={useDarkLightBg()} color={useDarkLightContentColor()} flex={1}>
        <Box as="main" textAlign="center" py={10} px={6}>
          <Heading display="inline-block" as="h2" size="2xl">
            404
          </Heading>
          <Text fontSize="18px" mt={3} mb={2}>
            404 Not Found
          </Text>
          <Text mb={6}>
            The page you&apos;re looking for does not seem to exist
          </Text>
          <Link href="/" legacyBehavior passHref>
            <Button
              as="a"
              colorScheme="teal"
              bg={useLightDarkBg()}
              color={useDarkLightColor()}
              variant="solid"
            >
              Go to Home
            </Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
}

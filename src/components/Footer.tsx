import { Box, Container, Stack, Text } from "@chakra-ui/react";

import {
  useDarkLightColor,
  useLightDarkBg,
} from "../hooks/useColorModeValues";

export const Footer = () => {
  return (
    <Box as="footer" bg={useLightDarkBg()} color={useDarkLightColor()}>
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          Copyright © 2022-PRESENT Richard Harrah. Released under the MIT
          License.
        </Text>
      </Container>
    </Box>
  );
};

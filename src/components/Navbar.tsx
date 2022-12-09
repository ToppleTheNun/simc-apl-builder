import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";

import { useDarkLightColor,useLightDarkBg } from "../hooks/useColorModeValues";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Flex
      as="header"
      w="full"
      px={4}
      minH={16}
      alignItems="center"
      justifyContent="space-between"
      bg={useLightDarkBg()}
      color={useDarkLightColor()}
    >
      <Box>
        <NextLink href="/" legacyBehavior passHref>
          <Link>simc APL Builder</Link>
        </NextLink>
      </Box>

      <Flex alignItems="center">
        <Stack direction="row" spacing={7}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

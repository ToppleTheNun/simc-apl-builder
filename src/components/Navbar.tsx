import { Box, Button, Flex, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  useHeaderFooterBg,
  useHeaderFooterColor,
} from "../hooks/useColorModeValues";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
      bg={useHeaderFooterBg()}
      color={useHeaderFooterColor()}
    >
      <Box>
        <Text>simc APL Builder</Text>
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

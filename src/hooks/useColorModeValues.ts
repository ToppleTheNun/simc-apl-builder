import { useColorModeValue } from "@chakra-ui/react";

export const useHeaderFooterColor = () =>
  useColorModeValue("gray.700", "gray.200");
export const useMainContentColor = () =>
  useColorModeValue("gray.200", "gray.700");

export const useHeaderFooterBg = () =>
  useColorModeValue("gray.100", "gray.900");
export const useMainContentBg = () => useColorModeValue("gray.900", "gray.100");

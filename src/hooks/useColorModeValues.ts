import { useColorModeValue } from "@chakra-ui/react";

export const useDarkLightColor = () =>
  useColorModeValue("gray.700", "gray.200");
export const useDarkLightContentColor = () =>
  useColorModeValue("gray.200", "gray.700");

export const useLightDarkBg = () => useColorModeValue("gray.100", "gray.900");
export const useDarkLightBg = () => useColorModeValue("gray.900", "gray.100");

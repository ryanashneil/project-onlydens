import { Box, Heading, HStack, Stack } from "@chakra-ui/react";

const Nav = (): JSX.Element => (
  <Box as="nav">
    <Stack
      direction={{ base: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      py="3"
      px={{ base: "3", md: "6", lg: "8" }}
      color="white"
      bg="blue.400"
    >
      <HStack spacing="3">
        <Heading fontFamily="Sacramento">Only Dens</Heading>
      </HStack>
    </Stack>
  </Box>
);

export default Nav;

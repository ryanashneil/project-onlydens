import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack
} from "@chakra-ui/react";

const CardLoading = (): JSX.Element => (
  <Stack border="1px solid" borderColor="gray.200" overflow="hidden">
    <Stack spacing="1rem" padding="1rem">
      <SkeletonCircle />
      <SkeletonText />
    </Stack>
    <Skeleton height="300px" />
  </Stack>
);

export default CardLoading;

import { Post } from "@od/types";
import { motion } from "framer-motion";

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Img,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";

type Props = {
  post: Post;
};

const MotionImg = motion(Img);

const Card = ({ post }: Props): JSX.Element => (
  <Stack border="1px solid" borderColor="gray.200" overflow="hidden">
    <Flex align="center" justify="space-between" w="100%" p="1rem" pb="0">
      <HStack>
        <Avatar name={post.author} />
        <Text fontSize="md">
          <Link
            color="gray.600"
            fontWeight="semibold"
            href={`https://www.reddit.com/user/${post.author}/`}
            isExternal
          >
            u/{post.author}
          </Link>
        </Text>
      </HStack>
      <Text color="gray.500">{post.createdAt}</Text>
    </Flex>
    <Text p="1rem">{post.title}</Text>
    <Box cursor="pointer" position="relative" overflow="hidden">
      <MotionImg
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        w="100%"
        h="100%"
        objectFit="cover"
        src={post.src}
      />
    </Box>
    <HStack p="1rem" fontSize="sm">
      <Text>{post.ups.toLocaleString()} likes</Text>
      <Text>•</Text>
      <Text>{post.comments.toLocaleString()} comments</Text>
    </HStack>
  </Stack>
);

export default Card;

import { motion } from "framer-motion";
import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import { Post } from "@od/types";

const MotionImg = motion(Img);

type Props = {
  post: Post;
};

const Card = ({ post }: Props): JSX.Element => {
  return (
    <Box bg="gray.100" borderRadius={["sm", null, "md"]} overflow="hidden">
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
      <Flex px="4" py="2" align="center" justify="space-between" w="100%">
        <Text fontSize={["xs", null, "sm"]}>
          Posted by{" "}
          <Link
            fontWeight="semibold"
            href={`https://www.reddit.com/user/${post.author}/`}
            isExternal
          >
            u/{post.author}
          </Link>
        </Text>
        <Flex align="center">
          <Text ml={1} fontSize={["xs", null, "sm"]}>
            {post.ups.toLocaleString()}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;

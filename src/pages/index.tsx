import Head from "next/head";

import { useReddit } from "@od/hooks";
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Skeleton,
  Text
} from "@chakra-ui/react";

import Card from "@od/components/Card";

const subreddits = ["RoomPorn", "InteriorDesign"];

const Home = (): JSX.Element => {
  const {
    posts,
    error,
    isLoadingInitialData,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd
  } = useReddit(subreddits);

  return (
    <div>
      <Head>
        <title>OnlyDens</title>
        <meta name="description" content="OnlyFans, but for rooms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="4xl" my="95px" flex={1}>
        <SimpleGrid columns={1} spacing={5} mt={6}>
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}

          {(isLoadingInitialData || isLoadingMore) &&
            [...Array.from(Array(15))].map((item) => (
              <Skeleton
                borderRadius={["sm", null, "md"]}
                key={item}
                height="275px"
              />
            ))}
        </SimpleGrid>

        {!isReachingEnd && (
          <Box textAlign="center" mt={8}>
            <Button onClick={() => setSize(size + 1)} isLoading={isLoadingMore}>
              Load More
            </Button>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Home;

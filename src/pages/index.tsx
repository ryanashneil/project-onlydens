import Head from "next/head";

import { useReddit } from "@od/hooks";
import { Box, Button, Container, SimpleGrid } from "@chakra-ui/react";
import { Card, CardLoading, Nav } from "@od/components";

const subreddits = ["RoomPorn", "InteriorDesign"];

const Home = (): JSX.Element => {
  const {
    posts,
    isLoadingInitial,
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
      <Nav />
      <Container maxW="2xl" my="95px" flex={1}>
        <SimpleGrid columns={1} spacing={5} mt={6}>
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}

          {(isLoadingInitial || isLoadingMore) &&
            [...Array.from(Array(15))].map((item) => (
              <CardLoading key={item} />
            ))}
        </SimpleGrid>

        {!isReachingEnd && (
          <Box textAlign="center" mt={8}>
            <Button
              colorScheme="twitter"
              borderRadius="full"
              onClick={() => setSize(size + 1)}
              isLoading={isLoadingMore}
            >
              😏 Load More
            </Button>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Home;

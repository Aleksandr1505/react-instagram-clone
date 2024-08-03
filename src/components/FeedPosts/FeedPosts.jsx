import { useEffect, useState } from 'react';
import { Container, VStack, Flex, SkeletonCircle, Skeleton, Box } from '@chakra-ui/react';
import FeedPost from './FeedPost';
import { feedPosts } from '../../assets/mockups';

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const feedPostsLengthArr = Array.from({ length: feedPosts.length }, (x, i) => i);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      {isLoading
        ? feedPostsLengthArr.map((_, index) => (
            <VStack key={`${index + 1}`} gap={4} alignItems="flex-start" mb={10}>
              <Flex gap="2">
                <SkeletonCircle size="10" />
                <VStack gap="2" alignItems="flex-start">
                  <Skeleton height="10px" width="200px" />
                  <Skeleton height="10px" width="200px" />
                </VStack>
              </Flex>
              <Skeleton width="full">
                <Box height="500px">Contents Wrapped</Box>
              </Skeleton>
            </VStack>
          ))
        : feedPosts.map((item, index) => (
            <FeedPost
              key={`${index + 1}`}
              username={item.username}
              avatar={item.avatar}
              img={item.img}
              status={item.status}
            />
          ))}
    </Container>
  );
};

export default FeedPosts;

import { useState } from 'react';
import { Flex, Box, Text, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '../../assets/constants';

const PostFooter = ({ username, status }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(10);

  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
  };

  return (
    <Box mb={10}>
      <Flex alignItems="center" gap={4} w="full" pt={0} mb={2} mt={4}>
        <Box fontSize={18} cursor="pointer" onClick={handleLike}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box fontSize={18} cursor="pointer">
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight="600" fontSize="sm">
        {likesCount} likes
      </Text>
      <Text fontWeight="700" fontSize="sm">
        {username}_{' '}
        <Text as="span" fontWeight="400">
          {status}
        </Text>
      </Text>
      <Text color="gray" fontSize="sm">
        View all 1,000 comments
      </Text>
      <Flex justifyContent="space-between" alignItems="center" w="full" gap={2}>
        <InputGroup>
          <Input fontSize={14} variant="flushed" placeholder="Add a comment..." />
          <InputRightElement>
            <Button
              fontSize={14}
              fontWeight={600}
              color="blue.500"
              cursor="pointer"
              _hover={{ color: 'white' }}
              bg="transparent"
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import { Box, Image } from '@chakra-ui/react';

const FeedPost = ({ username, avatar, img, status }) => {
  return (
    <div>
      <PostHeader username={username} avatar={avatar}  />
      <Box my={2} borderRadius={4} overflow="hidden">
        <Image src={img} alt="user profile pic" />
      </Box>
      <PostFooter username={username} status={status} />
    </div>
  );
};

export default FeedPost;

import { Box, Flex, Link, Tooltip, Avatar } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  InstagramLogo,
  InstagramMobileLogo,
  SearchLogo,
  NotificationsLogo,
  CreatePostLogo,
} from '../../assets/constants';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create',
    },
    {
      icon: <Avatar size="sm" name="Name Surname" src="/profilepic.png" />,
      text: 'Profile',
      link: "/programmer"
    },
  ];
  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      px={{ base: 2, md: 4 }}
      position={'sticky'}
      top={0}
      left={0}
    >
      <Flex direction={'column'} gap={10} w="full" height={'full'}>
        <Link to="/" as={RouterLink} pl={2} display={{ base: 'none', md: 'block' }} cursor={'pointer'}>
          <InstagramLogo />
        </Link>
        <Link
          to="/"
          as={RouterLink}
          pl={2}
          display={{ base: 'block', md: 'none' }}
          cursor={'pointer'}
          borderRadius={6}
          _hover={{
            bg: 'whiteAlpha.200',
          }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={`${index + 1}`}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: 'block', md: 'none' }}
            >
              <Link
                display={'flex'}
                to={item.link || null}
                as={RouterLink}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                {item.icon}
                <Box display={{ base: 'none', md: 'block' }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label="Logout"
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}
        >
          <Link
            display={'flex'}
            to={'/auth'}
            as={RouterLink}
            alignItems={'center'}
            gap={4}
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: 'full' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            mt="auto"
          >
            <BiLogOut size={25} />
            <Box display={{ base: 'none', md: 'block' }}>Logout</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;

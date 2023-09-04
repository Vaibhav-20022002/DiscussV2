import { HStack, IconButton, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import imgSrc from '../../assets/leetcode.svg';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavBar_SM = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(i => !i);
  };

  return (
    <HStack
      color={'white'}
      bg={'blackAlpha.800'}
      minH={'50px'}
      shadow={'lg'}
      justifyContent={'space-between'}
    >
      <Image
        src={imgSrc}
        alt="LeetCode"
        h={'22px'}
        m={'10px'}
        sx={{
          ':hover': {
            cursor: 'pointer',
          },
        }}
      />

      <IconButton
        aria-label="More"
        icon={isOpen ? <CloseIcon fontSize={'md'} /> : <HamburgerIcon />}
        colorScheme="whiteAlpha"
        variant={'unstyled'}
        onClick={handleClick}
        size={'lg'}
      />
    </HStack>
  );
};

export default NavBar_SM;

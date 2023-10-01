import {
  HStack,
  Button,
  Text,
  VStack,
  Image,
  IconButton,
  background,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import imgSrc from '../../assets/leetcode.svg';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { GoCommentDiscussion } from 'react-icons/go';
import { MdAccountCircle } from 'react-icons/md';

const NavBar_SM = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(i => !i);
  };

  return (
    <>
      <HStack
        color={'white'}
        bg={'blackAlpha.800'}
        minH={isOpen ? '0px' : '50px'}
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
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          colorScheme="whiteAlpha"
          variant={'unstyled'}
          onClick={handleClick}
          size={'lg'}
        />
      </HStack>
      {/* <VStack>
        <HStack m={'5px'} px={'2px'}>
          <MdAccountCircle size={'5em'} />

          <VStack>
            <Button
              colorScheme="transparent"
              variant="ghost"
              ml={'-135px'}
              mt={2}
            >
              <Text fontSize={'2xl'}> VaibhavVaibhav</Text>
            </Button>

            <Button colorScheme="transparent" variant="ghost">
              <Text
                mt={-2}
                fontSize={'sm'}
                fontWeight={'hairline'}
                bgColor={'transparent'}
                color={'orange.400'}
                _hover={{ color: 'blue' }}
              >
                Access all features with our Premium subscription!
              </Text>
            </Button>
          </VStack>
        </HStack>
      </VStack> */}
    </>
  );
};

export default NavBar_SM;

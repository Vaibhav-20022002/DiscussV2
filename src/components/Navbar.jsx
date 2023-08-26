import {
  Stack,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import imgSrc from '../assets/leetcode.svg';

const Navbar = () => {
  return (
    <Stack
      direction={['column', 'row']}
      color={'white'}
      bg={'blackAlpha.800'}
      minH={'50px'}
      shadow={'lg'}
      justifyContent={'space-between'}
    >
      <Stack direction={['column', 'row']} spacing={[null, 7]}>
        <Image
          src={imgSrc}
          alt="LeetCode"
          h={'22px'}
          m={'10px'}
          paddingLeft={[null, '90px']}
          sx={{
            ':hover': {
              cursor: 'pointer',
            },
          }}
        />
        <Button
          my={'5px'}
          variant={'unstyled'}
          color={'whiteAlpha.700'}
          borderRadius={'none'}
          borderBottom={'2px solid transparent'}
          sx={{
            '@media screen and (min-width: 30em)': {
              '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: 'transparent',
                transform: 'translateY(0)',
                transition: 'transform 0.3s, background-color 0.1s',
              },
              ':hover': {
                color: 'white',
                '&::before': {
                  backgroundColor: 'white',
                  transform: 'translateY(7px)',
                },
              },
            },
          }}
        >
          <Text fontSize={'mg'} fontFamily={'Roboto'} fontWeight={'normal'}>
            Discuss
          </Text>
        </Button>

        <Menu isLazy closeOnBlur={'true'} placement="auto">
          <MenuButton
            color={'orange.400'}
            fontSize={'mg'}
            fontFamily={'Roboto'}
            fontWeight={'normal'}
          >
            Store <ChevronDownIcon />
          </MenuButton>
          <MenuList bg={'blackAlpha.800'} minWidth={'`100px'}>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem
              bg={'transparent'}
              color={'orange.400'}
              _hover={{ bg: 'whiteAlpha.200', color: 'blue' }}
              sx={{
                justifyContent: 'center',
              }}
            >
              Redeem
            </MenuItem>
            <MenuItem
              bg={'transparent'}
              color={'orange.400'}
              _hover={{ bg: 'whiteAlpha.200', color: 'blue' }}
              sx={{
                justifyContent: 'center',
              }}
            >
              Premium
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>

      <Stack>
        <Button
          bgColor={'whiteAlpha.200'}
          color={'orange.400'}
          borderColor={'transparent'}
          variant={'outline'}
          h={'34px'}
          m={'8px'}
          maxWidth={'90px'}
          borderRadius={'md'}
          sx={{
            ':hover': {
              backgroundColor: 'whiteAlpha.300',
            },
          }}
        >
          <Text fontWeight={'normal'}>Premium</Text>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;

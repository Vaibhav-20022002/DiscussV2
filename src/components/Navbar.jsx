import {
  Stack,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon } from '@chakra-ui/icons';
import { FiBell } from 'react-icons/fi';
import { AiOutlineFire } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { FaFlask } from 'react-icons/fa';
import { BsCardList } from 'react-icons/bs';
import { GoSignOut } from 'react-icons/go';
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
          <MenuList bg={'blackAlpha.800'} minWidth={'100px'}>
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

      <Stack direction={[null, 'row']}>
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

        <Button
          color={'whiteAlpha.600'}
          variant={'ghost'}
          h={'34px'}
          my={'8px'}
          width={'40px'}
          sx={{
            padding: '0px',
            ':hover': {
              backgroundColor: 'whiteAlpha.300',
            },
          }}
        >
          <FiBell size={'1.3em'} />
        </Button>

        <Button
          color={'whiteAlpha.600'}
          variant={'ghost'}
          h={'34px'}
          my={'8px'}
          sx={{
            padding: '2px',
            ':hover': {
              backgroundColor: 'whiteAlpha.300',
            },
          }}
        >
          <AiOutlineFire size={'1.5em'} />
          <Text fontWeight={'normal'} mx={'5px'}>
            0
          </Text>
        </Button>

        <Menu placement="auto">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdAccountCircle size={'1.8em'} />}
            variant={'unstyled'}
            h={'34px'}
            my={'8px'}
            marginRight={[null, '90px']}
            sx={{
              padding: '2px',
            }}
          />
          <MenuList bg={'blackAlpha.800'}>
            <MenuItem bg={'transparent'} marginTop={'4px'}>
              <Stack direction={'row'}>
                <MdAccountCircle size={'5.2em'} />
                <Stack direction={'column'} marginLeft={'-40px'}>
                  <Button colorScheme="transparent" variant="ghost">
                    <Text fontSize={'2xl'} marginLeft={'30px'}>
                      {' '}
                      VaibhavVaibhav
                    </Text>
                  </Button>

                  <Button colorScheme="transparent" variant="ghost">
                    <Text
                      marginTop={'-15px'}
                      fontSize={'sm'}
                      fontWeight={'hairline'}
                      bgColor={'transparent'}
                      color={'orange.400'}
                      _hover={{ color: 'blue' }}
                      style={{ textIndent: 30 }}
                      sx={{
                        justifyContent: 'left',
                      }}
                    >
                      Access all features with our
                      <br />
                      Premium subscription!
                    </Text>
                  </Button>
                </Stack>
              </Stack>
            </MenuItem>
            <MenuItem
              icon={<FaFlask />}
              bg={'transparent'}
              color={'whiteAlpha.900'}
              _hover={{ bg: 'whiteAlpha.200' }}
              sx={{
                justifyContent: 'center',
              }}
            >
              Try New Features
            </MenuItem>
            <MenuItem
              icon={<BsCardList />}
              bg={'transparent'}
              color={'whiteAlpha.900'}
              _hover={{ bg: 'whiteAlpha.200' }}
              sx={{
                justifyContent: 'center',
              }}
            >
              Orders
            </MenuItem>
            <MenuItem
              icon={<MoonIcon />}
              bg={'transparent'}
              color={'whiteAlpha.900'}
              _hover={{ bg: 'whiteAlpha.200' }}
              sx={{
                justifyContent: 'center',
              }}
            >
              Dark Side
            </MenuItem>
            <MenuItem
              icon={<GoSignOut />}
              bg={'transparent'}
              color={'whiteAlpha.900'}
              _hover={{ bg: 'whiteAlpha.200' }}
              sx={{
                justifyContent: 'center',
              }}
            >
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default Navbar;

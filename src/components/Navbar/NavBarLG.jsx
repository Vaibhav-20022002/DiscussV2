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
import imgSrc from '../../assets/leetcode.svg';

const Navbar = () => {
  return (
    <Stack
      direction={('column', 'row')}
      color={'white'}
      bg={'blackAlpha.800'}
      minH={'1rem'}
      shadow={'lg'}
      justifyContent={'space-between'}
      place-items={'center'}
    >
      <Stack
        direction={['column', 'row']}
        marginLeft={{ base: '50px', md: '70px', lg: '90px' }}
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
        <Button
          my={'5px'}
          mx={'15px'}
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

        <Menu closeOnBlur={'true'} placement="auto">
          <MenuButton
            color={'orange.400'}
            fontSize={'mg'}
            fontFamily={'Roboto'}
            fontWeight={'normal'}
            mx={'15px'}
          >
            <Stack direction={'row'}>
              <Text>Store</Text> <ChevronDownIcon my={'auto'} />
            </Stack>
          </MenuButton>
          <MenuList bg={'blackAlpha.800'} minWidth={'100px'} marginTop={'5px'}>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem
              bg={'transparent'}
              color={'orange.400'}
              _hover={{ bg: 'whiteAlpha.200', color: 'lightblue' }}
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

      <Stack
        direction={['column', 'row']}
        marginRight={{ base: '50px', md: '70px', lg: '90px' }}
      >
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

        <Menu isLazy placement={'bottom-end'} preventOverflow="false">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdAccountCircle size={'1.8em'} />}
            variant={'unstyled'}
            h={'34px'}
            my={'8px'}
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

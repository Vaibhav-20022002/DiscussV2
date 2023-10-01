import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBarLG from './NavBarLG';
import NavBarSM from './NavBarSM';

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          '@media screen and (max-width: 639px)': {
            display: 'none',
          },
        }}
      >
        <NavBarLG />
      </Box>

      <Box
        sx={{
          '@media screen and (min-width: 640px)': {
            display: 'none',
          },
        }}
      >
        <NavBarSM />
      </Box>
    </>
  );
};

export default Navbar;

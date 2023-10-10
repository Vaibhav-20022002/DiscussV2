import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/Navbar/NavBarMain.jsx';
import Login from './components/Login.jsx';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {/* <Login /> */}
    </ChakraProvider>
  );
};

export default App;

import {
  VStack,
  Image,
  FormControl,
  Input,
  FormErrorMessage,
  Center,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import imgSrc from './../assets/leetcode.svg';

const Login = () => {
  const [input, setInput] = useState('');

  const handleInputChange = e => setInput(e.target.value);

  const isError = input === '';

  return (
    <Center>
      <VStack
        marginX={'auto'}
        marginY={'150px'}
        minWidth={'500px'}
        border={'1px solid gray'}
        justify={'center'}
      >
        <Image src={imgSrc} boxSize={'100px'} p={'10px'}></Image>

        <FormControl isInvalid={isError} p={'10px'}>
          <Input
            type="text"
            placeholder="Username or E-mail"
            value={input}
            onChange={handleInputChange}
            focusBorderColor="blackAlpha.500"
          />

          {isError ? (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          ) : (
            <FormErrorMessage></FormErrorMessage>
          )}
        </FormControl>
      </VStack>
    </Center>
  );
};

export default Login;

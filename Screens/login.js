import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import TextInput from '../Components/TextInput/textInput';
import Button from '../Components/Button/button';

const LoginWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

function Login() {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <LoginWrapper>
      <TextInput
        onChangeText={setUserName}
        value={userName}
        placeholder="Your username"
        textContentType="username"
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Your password"
        textContentType="password"
      />
      <Button title="Loading..." />
    </LoginWrapper>
  );
}

export default Login;

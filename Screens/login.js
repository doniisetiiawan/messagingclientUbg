import React from 'react';
import { AsyncStorage, View, Alert } from 'react-native';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import TextInput from '../Components/TextInput/textInput';
import Button from '../Components/Button/button';
import { LOGIN_USER } from '../constants';

const LoginWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

function Login({ navigation }) {
  const [loginUser, { loading }] = useMutation(LOGIN_USER);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    AsyncStorage.getItem('token').then((value) => {
      navigation.navigate(value ? 'Conversations' : 'Login');
    });
  }, [navigation]);

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
      <Button
        title={loading ? 'Loading...' : 'Login'}
        onPress={() => {
          loginUser({ variables: { userName, password } })
            .then(({ data }) => {
              const { token } = data.loginUser;

              AsyncStorage.setItem('token', token).then(
                () => {
                  navigation.navigate('Conversations');
                },
              );
            })
            .catch((error) => {
              if (error) {
                Alert.alert(
                  'Error',
                  error.graphQLErrors.map(
                    ({ message }) => message,
                  )[0],
                );
              }
            });
        }}
      />
    </LoginWrapper>
  );
}

export default Login;

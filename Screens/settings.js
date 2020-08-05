import React from 'react';
import { AsyncStorage, View } from 'react-native';
import styled from 'styled-components';
import Button from '../Components/Button/button';

const SettingsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

function Settings({ navigation }) {
  return (
    <SettingsWrapper>
      <Button
        title="Log out"
        onPress={() => {
          AsyncStorage.removeItem('token').then(() => navigation.navigate('Login'));
        }}
      />
    </SettingsWrapper>
  );
}

export default Settings;

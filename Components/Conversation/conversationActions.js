import React from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from '@apollo/client';
import TextInput from '../TextInput/textInput';
import Button from '../Button/button';
import { SEND_MESSAGE } from '../../constants';

const ConversationActionsWrapper = styled(View)`
  width: 100%;
  background-color: #ccc;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

function ConversationActions({ userName }) {
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const [message, setMessage] = React.useState('');

  return (
    <ConversationActionsWrapper>
      <TextInput
        width={75}
        marginBottom={0}
        onChangeText={setMessage}
        placeholder="Your message"
        value={message}
      />
      <Button
        width={20}
        padding={10}
        onPress={() => {
          sendMessage({
            variables: { to: userName, text: message },
          });
          setMessage('');
        }}
        title={(
          <Ionicons
            name={`${
              Platform.OS === 'ios' ? 'ios' : 'md'
            }-send`}
            size={42}
            color="white"
          />
        )}
      />
    </ConversationActionsWrapper>
  );
}

export default ConversationActions;

import React from 'react';
import styled from 'styled-components';
import {
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Message from '../Message/message';

const ConversationBodyWrapper = styled(ScrollView)`
  width: 100%;
  padding: 2%;
  display: flex;
  height: ${Dimensions.get('window').height * 0.6};
`;

const MessagesList = styled(FlatList)`
  width: 100%;
`;

function ConversationBody({ messages }) {
  return (
    <ConversationBodyWrapper>
      <MessagesList
        data={messages}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Message
            align={
              item.userName === 'me' ? 'left' : 'right'
            }
          >
            {item.text}
          </Message>
        )}
      />
    </ConversationBodyWrapper>
  );
}

export default ConversationBody;

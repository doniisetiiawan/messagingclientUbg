import React from 'react';
import styled from 'styled-components';
import { FlatList, Text, View } from 'react-native';
import ConversationItem from '../Components/Conversation/conversationItem';

const ConversationsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const ConversationsList = styled(FlatList)`
  width: 100%;
`;

const ConversationsText = styled(Text)`
  font-size: 20px;
  color: black;
`;

function Conversations() {
  return (
    <ConversationsWrapper>
      <ConversationItem />
    </ConversationsWrapper>
  );
}

export default Conversations;

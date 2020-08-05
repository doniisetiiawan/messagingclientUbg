import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import ConversationActions from '../Components/Conversation/conversationActions';

const ConversationWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ConversationBodyText = styled(Text)`
  font-size: 20px;
  color: black;
`;

function Conversation() {
  return (
    <ConversationWrapper>
      <ConversationBodyText>
        Loading...
      </ConversationBodyText>
      <ConversationActions />
    </ConversationWrapper>
  );
}

export default Conversation;

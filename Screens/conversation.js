import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import ConversationActions from '../Components/Conversation/conversationActions';
import { GET_CONVERSATION } from '../constants';
import ConversationBody from '../Components/Conversation/conversationBody';

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

function Conversation({ route }) {
  const { userName } = route.params;
  const { loading, data, subscribeToMore } = useQuery(
    GET_CONVERSATION,
    {
      variables: { userName },
    },
  );

  if (loading) {
    return (
      <ConversationBodyText>
        Loading...
      </ConversationBodyText>
    );
  }

  const { messages } = data.conversation;

  console.log(messages);

  return (
    <ConversationWrapper>
      <ConversationBody
        messages={messages}
        subscribeToMore={subscribeToMore}
        userName={userName}
      />
      <ConversationActions userName={userName} />
    </ConversationWrapper>
  );
}

export default Conversation;

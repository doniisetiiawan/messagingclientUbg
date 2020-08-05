import React from 'react';
import {
  Platform, Text, TouchableOpacity, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

const ConversationItemWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  padding: 2%;
  border: 1px solid #ccc;
  margin-bottom: 2%;
`;

const ThumbnailWrapper = styled(View)`
  padding-right: 2%;
`;

const UserName = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;

const Message = styled(Text)`
  flex-wrap: wrap;
  max-width: 95%;
  font-size: 14px;
`;

function ConversationItem() {
  return (
    <ConversationItemWrapper>
      <ThumbnailWrapper>
        <Ionicons
          name={`${
            Platform.OS === 'ios' ? 'ios' : 'md'
          }-contact`}
          size={60}
          color="green"
        />
      </ThumbnailWrapper>
      <View>
        <UserName>item.userName</UserName>
        <Message>{'item.messages'[0].text}</Message>
      </View>
    </ConversationItemWrapper>
  );
}

export default ConversationItem;

import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const MessageBalloon = styled(View)`
  background-color: ${({ align }) => (align === 'left' ? 'grey' : 'blue')}
  padding: 4%;
  margin-bottom: 2%;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  align-self: ${({ align }) => (align === 'left' ? 'flex-start' : 'flex-end')};
`;

const MessageBalloonText = styled(Text)`
  color: white;
  font-size: 18px;
  max-width: 88%;
`;

const Message = ({ children, align }) => (
  <MessageBalloon align={align}>
    <MessageBalloonText>{children}</MessageBalloonText>
  </MessageBalloon>
);

export default Message;

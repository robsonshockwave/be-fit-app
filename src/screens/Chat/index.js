import React from 'react';
import {Container, ImageChat} from './styles';
import CHAT from '../../assets/chat.png';

export default () => {
  return (
    <Container>
      <ImageChat source={CHAT} />
    </Container>
  );
};

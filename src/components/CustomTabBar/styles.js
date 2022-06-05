import React from 'react';
import styled from 'styled-components/native';

export const TabArea = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 79px;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  padding-top: 12px;
  justify-content: flex-start;
  align-items: center;
`;

export const TextIcon = styled.Text`
  padding-top: 5px;
`;

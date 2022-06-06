import React from 'react';
import styled from 'styled-components/native';

export const InputArea = styled.View`
  width: 100%;
  height: 48px;
  background-color: #d7d7d7;
  border-top-left-radius: ${props => props.radiusTop};
  border-bottom-left-radius: ${props => props.radiusBottom};
  border-top-right-radius: ${props => props.radiusTop};
  border-bottom-right-radius: ${props => props.radiusBottom};
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 17px;
  margin: ${props => props.marginOne};
`;

export const Input = styled.TextInput`
  width: 100%;
  flex: 1;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #4f5967;
  margin: 0 12px;
`;

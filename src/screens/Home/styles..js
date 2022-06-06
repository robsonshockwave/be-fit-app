import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin-top: 20px;
`;

export const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 32px;
  color: #4f5967;
  padding-left: 60px;
`;

export const ButtonLogout = styled.TouchableOpacity`
  justify-content: center;
  height: 50px;
  width: 60px;
`;

export const TextLogout = styled.Text`
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 16px;
  color: #30a960;
`;

export const TextHello = styled.Text`
  margin: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #4f5967;
`;

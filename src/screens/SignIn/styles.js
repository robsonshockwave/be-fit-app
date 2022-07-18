import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #e5e5e5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
  position: absolute;
  top: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #4f5967;
`;

export const InputArea = styled.View`
  padding: 50px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  margin-top: 5px;
  background: #30a960;
  border-radius: 10px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #fff;
`;

export const WrapperOptions = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextTypeUser = styled.Text`
  font-family: 'Montserrat';
  font-size: 14px;
  color: #30a960;
  font-weight: 700;
  padding: 20px 0 7.5px;
  text-align: center;
`;

export const TextLogin = styled.Text`
  font-family: 'Montserrat';
  font-size: 15px;
  color: #30a960;
  font-weight: 700;
  padding: 20px 0 10px;
  text-align: center;
`;

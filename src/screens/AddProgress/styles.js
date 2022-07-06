import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
`;

export const InputArea = styled.View`
  padding: 15px 50px;
  width: 100%;
`;

export const TextTitle = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #4f5967;
  text-align: center;
  margin-top: 30px;
`;

export const CustomButton = styled.TouchableOpacity`
  margin-top: 18px;
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

export const TitleForm = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #30a960;
  font-weight: bold;
`;

export const TextEdit = styled.Text`
  text-align: center;
  padding-top: 14px;
  font-size: 14px;
  color: #4f5967;
  text-decoration: dashed;
  font-weight: 500;
`;

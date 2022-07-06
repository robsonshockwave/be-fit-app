import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
  margin-bottom: 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #4f5967;
`;

export const InputArea = styled.View`
  padding: 15px 50px;
  width: 100%;
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

export const UploadButton = styled.TouchableOpacity`
  margin-top: 2px;
  background: grey;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const TextUploadVideo = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #fff7f7;
  font-weight: 500;
`;

export const TextVideoExist = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;

export const TextPreVideo = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 5px;
`;

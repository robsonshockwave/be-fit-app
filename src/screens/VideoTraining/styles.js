import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 15px 0px;
`;

export const WrapperTitle = styled.View`
  align-items: center;
  margin: 20px 30px 0;
  background-color: #30a960;
  border-radius: 10px;
`;

export const TextNameTraining = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  padding-top: 10px;
`;

export const TextTypeTraining = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  padding-bottom: 10px;
`;

export const VideoContainer = styled.ScrollView`
  margin: 0 5px -30px;
`;

export const TextAtent = styled.Text`
  text-align: center;
  font-size: 13px;
  margin-top: 7px;
`;

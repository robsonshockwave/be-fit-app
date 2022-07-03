import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 45px 0px;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextName = styled.Text`
  margin-left: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #4f5967;
`;

export const VerifyProgressButton = styled.TouchableOpacity`
  margin-right: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: rgba(48, 169, 96, 0.32);
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
`;

export const TextVerifyProgress = styled.Text`
  font-size: 13px;
  color: #30a960;
`;

export const WrapperStudentRecord = styled.View`
  margin: 30px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
`;

export const TextRecordTitle = styled.Text`
  font-size: 17px;
  color: #4f5967;
  padding-bottom: 10px;
  font-weight: bold;
`;

export const TextRecord = styled.Text`
  font-size: 14px;
  color: #4f5967;
  padding: 0;
  font-weight: 300;
`;

export const AddTrainingButton = styled.TouchableOpacity`
  background-color: #30a960;
  margin: 0 30px;
  border-radius: 10px;
`;

export const TextAddTraining = styled.Text`
  padding: 12px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

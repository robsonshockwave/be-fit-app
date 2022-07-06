import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin-top: 20px;
`;

export const TrainingsView = styled.ScrollView`
  height: 570px;
`;

export const TrainingCard = styled.TouchableOpacity`
  flex-direction: row;
  height: 67px;
  margin: 10px 30px 4px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const TrainingWrapper = styled.View``;

export const TrainingName = styled.Text`
  padding: 12px 20px 5px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #4f5967;
`;

export const TrainingType = styled.Text`
  padding: 0px 20px 12px;
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 13px;
  color: #4f5967;
`;

export const DeleteTrainingButton = styled.TouchableOpacity`
  margin-right: 20px;
  z-index: 2;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 10px;
`;

export const TextTitle = styled.Text`
  margin-left: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #4f5967;
`;

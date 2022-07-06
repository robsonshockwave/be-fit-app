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
  margin: 40px 30px 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #4f5967;
`;

export const WrapperTitleList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TextList = styled.Text`
  margin-left: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #4f5967;
`;

export const AddStudentButton = styled.TouchableOpacity`
  margin-right: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: rgba(48, 169, 96, 0.32);
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
`;

export const TextAddStudentButton = styled.Text`
  font-size: 13px;
  color: #30a960;
`;

export const AreaView = styled.ScrollView`
  height: 400px;
`;

export const TextBold = styled.Text`
  font-weight: 700;
`;

export const TextGoTrain = styled.Text`
  font-weight: 700;
  font-size: 24px;
  font-family: 'Montserrat';
  color: #4f5967;
  margin: -10px 0 20px 30px;
`;

export const StudentWrapper = styled.View``;

export const DeleteStudentButton = styled.TouchableOpacity`
  margin-right: 20px;
  z-index: 2;
`;

export const StudentCard = styled.TouchableOpacity`
  flex-direction: row;
  height: 67px;
  margin: 10px 30px 4px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const StudentName = styled.Text`
  padding: 12px 20px 5px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #4f5967;
`;

export const StudentGoal = styled.Text`
  padding: 0px 20px 12px;
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 13px;
  color: #4f5967;
`;

export const ImageDayExercise = styled.Image`
  margin: 0 30px;
  max-width: 376px;
  height: 230px;
`;

export const WrapperLastTraining = styled.View`
  background-color: #30a960;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin: 0 30px 10px;
  border-radius: 10px;
`;

export const TextLastTraining = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
`;

export const CardTraining = styled.TouchableOpacity`
  margin: 5px 30px;
  background-color: #fff;
  border-radius: 10px;
`;

export const TextTypeTraining = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px 5px;
`;

export const TextNameTraining = styled.Text`
  font-size: 16px;
  font-weight: 500;
  padding: 0px 20px 0px;
`;

export const TextDateTraining = styled.Text`
  font-size: 12px;
  font-weight: 500;
  padding: 0px 20px 12px;
`;

export const CustomButton = styled.TouchableOpacity`
  margin-top: 16px;
  background: #30a960;
  border-radius: 10px;
  height: 48px;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 170px;
`;

export const CustomButtonTwo = styled.TouchableOpacity`
  margin-top: 16px;
  background: #fff;
  border: 1px solid #30a960;
  border-radius: 10px;
  height: 48px;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 170px;
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

export const CustomButtonTextTwo = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #30a960;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin: 0 30px;
  justify-content: space-between;
`;

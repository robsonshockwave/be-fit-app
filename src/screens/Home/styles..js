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
  margin: 40px 30px 30px;
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

export const StudentsView = styled.ScrollView`
  margin-bottom: 310px;
`;

export const StudentWrapper = styled.View``;

export const DeleteStudentButton = styled.TouchableOpacity`
  margin-right: 20px;
  z-index: 2;
`;

export const StudentCard = styled.View`
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

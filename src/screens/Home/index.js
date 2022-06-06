import React from 'react';
import {
  AddStudentButton,
  ButtonLogout,
  Container,
  DeleteStudentButton,
  HeaderTitle,
  StudentCard,
  StudentGoal,
  StudentName,
  StudentsView,
  StudentWrapper,
  Teste,
  TextAddStudentButton,
  TextHello,
  TextList,
  TextLogout,
  WrapperHeader,
  WrapperTitleList,
} from './styles.';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import DeleteIcon from '../../assets/delete-icon.svg';

export default () => {
  const navigation = useNavigation();

  const signOut = async () => {
    await AsyncStorage.removeItem('token');

    navigation.navigate('SignIn');
  };

  const mock = [
    {
      name: 'Robson Arruda',
      goal: 'Ganhar peso',
    },
    {
      name: 'Carlos Souza',
      goal: 'Ficar maromba',
    },
    {
      name: 'Luan Bernabe',
      goal: 'Apenas para melhorar a saúde',
    },
    {
      name: 'João Lucas Ribeiro',
      goal: 'Malhar os glúteos',
    },
    {
      name: 'Robson Arruda',
      goal: 'Ganhar peso',
    },
    {
      name: 'Robson Arruda',
      goal: 'Ganhar peso',
    },
    {
      name: 'Robson Arruda',
      goal: 'Ganhar peso',
    },
    {
      name: 'Robson Arruda',
      goal: 'Ganhar peso',
    },
  ];

  return (
    <Container>
      <WrapperHeader>
        <HeaderTitle>BE FIT</HeaderTitle>
        <ButtonLogout onPress={signOut}>
          <TextLogout>SAIR</TextLogout>
        </ButtonLogout>
      </WrapperHeader>
      <TextHello>Olá, usuário! ;{')'}</TextHello>

      {true ? (
        <>
          <WrapperTitleList>
            <TextList>Alunos</TextList>
            <AddStudentButton
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <TextAddStudentButton>Adicionar aluno</TextAddStudentButton>
            </AddStudentButton>
          </WrapperTitleList>
          <StudentsView>
            {mock.map((values, index) => (
              <StudentCard key={index}>
                <StudentWrapper>
                  <StudentName>{values.name}</StudentName>
                  <StudentGoal>{values.goal}</StudentGoal>
                </StudentWrapper>
                <DeleteStudentButton>
                  <DeleteIcon fill="red" height="28" width="28" />
                </DeleteStudentButton>
              </StudentCard>
            ))}
          </StudentsView>
        </>
      ) : null}
    </Container>
  );
};

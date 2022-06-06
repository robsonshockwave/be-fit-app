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

import Api from '../../services/Api';

export default () => {
  const navigation = useNavigation();
  const [listStudents, setListStudents] = React.useState([]);

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

  const requestListStudents = async () => {
    const personalId = 1;
    let res = await Api.getListStudents(personalId);
    console.log(res);

    if (res) {
      setListStudents(res);
    } else {
      alert(
        'Ops, ocorreu um erro ao carregar a lista de alunos!\n\n' + res.error,
      );
    }
  };

  const handleDeleteStudent = async () => {
    const personalId = 1;
    let res = await Api.deleteStudent(personalId);
    console.log(res);

    if (res) {
      requestListStudents();
    } else {
      alert('Ops, ocorreu um erro ao deletar o aluno!');
    }
  };

  React.useEffect(() => {
    requestListStudents();
  }, []);

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
                <DeleteStudentButton onPress={handleDeleteStudent}>
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

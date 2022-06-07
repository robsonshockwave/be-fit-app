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
import {RefreshControl} from 'react-native';

import Api from '../../services/Api';
import {UserContext} from '../../contexts/UserContext';

export default () => {
  const navigation = useNavigation();
  const {state: resultUser} = React.useContext(UserContext);
  const [listStudents, setListStudents] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const signOut = async () => {
    await AsyncStorage.removeItem('token');

    navigation.navigate('SignIn');
  };

  const requestListStudents = async () => {
    const token = await AsyncStorage.getItem('token');
    const personalId = resultUser.id;
    const res = await Api.getListStudents(personalId, token);

    if (res) {
      setListStudents(res);
    } else {
      alert(
        'Ops, ocorreu um erro ao carregar a lista de alunos!\n\n' + res.error,
      );
    }
  };

  const handleDeleteStudent = async id => {
    const token = await AsyncStorage.getItem('token');
    console.log(token, 'token aqui');
    let res = await Api.deleteStudent(id, token);
    console.log(res);

    if (res) {
      requestListStudents();
    } else {
      alert('Ops, ocorreu um erro ao deletar o aluno!');
    }
  };

  const onRefresh = () => {
    setRefreshing(false);
    requestListStudents();
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

      {console.log(resultUser?.useType, 'resultUser?.useType')}

      {resultUser?.useType === 'P' ? (
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
          <StudentsView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {listStudents.map((values, index) => (
              <StudentCard key={index}>
                <StudentWrapper>
                  <StudentName>{values.name}</StudentName>
                  <StudentGoal>{values.goals}</StudentGoal>
                </StudentWrapper>
                <DeleteStudentButton
                  onPress={() => handleDeleteStudent(values.id)}>
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

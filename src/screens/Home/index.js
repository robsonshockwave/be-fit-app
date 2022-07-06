import React from 'react';
import {
  AddStudentButton,
  ButtonLogout,
  ButtonsContainer,
  CardTraining,
  Container,
  CustomButton,
  CustomButtonText,
  CustomButtonTextTwo,
  CustomButtonTwo,
  DeleteStudentButton,
  HeaderTitle,
  ImageDayExercise,
  StudentCard,
  StudentGoal,
  StudentName,
  AreaView,
  StudentWrapper,
  TextAddStudentButton,
  TextBold,
  TextDateTraining,
  TextGoTrain,
  TextHello,
  TextLastTraining,
  TextList,
  TextLogout,
  TextNameTraining,
  TextTypeTraining,
  WrapperHeader,
  WrapperLastTraining,
  WrapperTitleList,
} from './styles.';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import DeleteIcon from '../../assets/delete-icon.svg';
import {Alert, RefreshControl, Text, View} from 'react-native';
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
      Alert.alert(
        'Ops!',
        'Ops, ocorreu um erro ao carregar a lista de alunos!\n\n' + res.error,
      );
    }
  };

  const handleDeleteStudent = async id => {
    const token = await AsyncStorage.getItem('token');
    let res = await Api.deleteStudent(id, token);

    if (res) {
      requestListStudents();
    } else {
      Alert.alert('Ops!', 'Ops, ocorreu um erro ao deletar o aluno!');
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
      <TextHello>
        Olá, <TextBold>{resultUser.name}</TextBold>! 💪
      </TextHello>

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
          <>
            <AreaView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              {listStudents &&
                listStudents?.map((values, index) => (
                  <StudentCard
                    key={index}
                    onPress={() => {
                      navigation.navigate('Student', {
                        id: values.id,
                        name: values.name,
                        goals: values.goals,
                        index: index,
                      });
                    }}>
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
            </AreaView>
            <ButtonsContainer>
              <CustomButton
                onPress={() => {
                  navigation.navigate('Training');
                }}>
                <CustomButtonText>Adicionar vídeo</CustomButtonText>
              </CustomButton>
              <CustomButtonTwo
                onPress={() => {
                  navigation.navigate('ListTraining');
                }}>
                <CustomButtonTextTwo>Treinos registrados</CustomButtonTextTwo>
              </CustomButtonTwo>
            </ButtonsContainer>
          </>
        </>
      ) : (
        <>
          <TextGoTrain>Bora treinar</TextGoTrain>
          <WrapperLastTraining>
            <TextLastTraining>↓ Últimos treinos postados ↓</TextLastTraining>
          </WrapperLastTraining>
          <AreaView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={() => {}} />
            }>
            <CardTraining
              onPress={() => {
                navigation.navigate('VideoTraining');
              }}>
              <TextTypeTraining>🏋️‍♀️ Tipo: </TextTypeTraining>
              <TextNameTraining>Nome do treino</TextNameTraining>
              <TextDateTraining>Dia: </TextDateTraining>
            </CardTraining>
          </AreaView>
        </>
      )}
    </Container>
  );
};

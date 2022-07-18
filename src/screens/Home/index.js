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
  TextTypeTraining,
  WrapperHeader,
  WrapperLastTraining,
  WrapperTitleList,
  TextTraining,
  WrapTraining,
  ContentTitleButton,
} from './styles.';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import DeleteIcon from '../../assets/delete-icon.svg';
import {Alert, RefreshControl, Text} from 'react-native';
import Api from '../../services/Api';
import {UserContext} from '../../contexts/UserContext';
import SelectInput from '../../components/SelectInput';

export default () => {
  const navigation = useNavigation();
  const {state: resultUser} = React.useContext(UserContext);
  const [listStudents, setListStudents] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [listTraining, setListTraining] = React.useState([]);
  const [filterListTraining, setFilterListTraining] = React.useState([]);

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

  const handleGetListTrainings = async id => {
    const token = await AsyncStorage.getItem('token');
    const studentId = resultUser.id;
    let res = await Api.getTrainingStudent(studentId, token);

    if (res) {
      setListTraining(res);
      setFilterListTraining(res);
    } else {
      Alert.alert(
        'Ops!',
        'Ops, ocorreu um erro ao carregar a lista de treino!',
      );
    }
  };

  const days = [
    'Todos',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo',
  ];

  const filterList = option => {
    const result = listTraining.filter(values => {
      if (option === days[0]) return values;
      else if (option === values?.day.trim()) return values;
    });
    setFilterListTraining(result);
  };

  const onRefresh = () => {
    setRefreshing(false);
    requestListStudents();
  };

  React.useEffect(() => {
    handleGetListTrainings();
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
          <ContentTitleButton>
            <WrapperLastTraining>
              <TextLastTraining>{`⬇️  Últimos treinos`}</TextLastTraining>
            </WrapperLastTraining>
            <SelectInput
              options={days}
              setOption={filterList}
              radiusTop
              radiusBottom
              placeholder={'🔎 Dia'}
              width={120}
            />
          </ContentTitleButton>
          <AreaView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={() => {}} />
            }>
            {filterListTraining?.map((values, index) => (
              <CardTraining
                key={index}
                onPress={() => {
                  navigation.navigate('VideoTraining', {
                    category: values?.category && values?.category.trim(),
                    name: values?.name ? values?.name.trim() : 'Sem treino',
                    url: values?.url
                      ? values?.url
                      : 'https://www.youtube.com/watch?v=Hm5d0DcjFCo',
                  });
                }}>
                <TextTypeTraining>🏋️‍♀️ Tipo: {values?.category}</TextTypeTraining>
                <WrapTraining>
                  <TextTraining>
                    Nome: {values?.name ? values.name : 'Sem nome'}
                  </TextTraining>
                  <Text style={{fontSize: 12}}>Ver ➡️</Text>
                </WrapTraining>
                <TextDateTraining>Dia: {values?.day}</TextDateTraining>
              </CardTraining>
            ))}
          </AreaView>
        </>
      )}
    </Container>
  );
};

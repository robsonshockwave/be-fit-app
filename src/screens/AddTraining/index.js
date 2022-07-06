import React from 'react';
import {
  Container,
  CustomButton,
  CustomButtonText,
  InputArea,
  TextEdit,
  TextTitle,
  TitleForm,
} from './styles';
import SigninInput from '../../components/SigninInput';
import {useNavigation} from '@react-navigation/native';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import {Alert} from 'react-native';
import SelectInput from '../../components/SelectInput';

export default ({route}) => {
  const navigation = useNavigation();
  const {state: resultUser} = React.useContext(UserContext);
  const [typeField, setTypeField] = React.useState('');
  const [student, setStudent] = React.useState({});

  React.useEffect(() => {
    setStudent(route.params);
  }, []);

  const handleAddTraining = async () => {
    const personalId = resultUser?.id;
    const token = await AsyncStorage.getItem('token');

    if (typeField != '') {
      let res = await Api.createTraining(idStudent, token, personalId);

      console.log(res);

      if (res) {
        Alert.alert('Eba!', 'Treino cadastrado para o aluno!');

        navigation.navigate('Home');
      } else {
        Alert.alert('Ops!', 'Deu erro ao cadastrar treino para o aluno!');
      }
    } else {
      Alert.alert('Epa!', 'Preencha todos os campos!');
    }
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  const onSetTypeField = option => {
    setTypeField(option);
  };

  const options = [
    'Peito, triceps e abdomem',
    'Costas e biceps',
    'Perna',
    'Ombro e abdomen',
    'Triceps e Biceps',
    'Perna e abdomem',
  ];

  return (
    <Container>
      <TextTitle>BE FIT</TextTitle>
      <TitleForm>
        🤸‍♂️ Adicionar treino para o aluno{'\n'} {student.name}
      </TitleForm>
      <InputArea>
        <SelectInput
          options={options}
          setOption={onSetTypeField}
          marginOne
          radiusTop
          radiusBottom
        />
        <CustomButton onPress={handleAddTraining}>
          <CustomButtonText>Adicionar treino</CustomButtonText>
        </CustomButton>
        <TextEdit onPress={handleGoHome}>Cancelar</TextEdit>
      </InputArea>
    </Container>
  );
};

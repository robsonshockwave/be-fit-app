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

  return (
    <Container>
      <TextTitle>BE FIT</TextTitle>
      <TitleForm>🤸‍♂️ Adicionar treino para o aluno {student.name}</TitleForm>
      <InputArea>
        <SigninInput
          placeholder="Categoria"
          value={typeField}
          onChangeText={t => setTypeField(t)}
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

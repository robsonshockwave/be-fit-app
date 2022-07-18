import React from 'react';
import SigninInput from '../../components/SigninInput';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  TitleForm,
  TextEdit,
  TextTitle,
  AreaView,
} from './styles';
import Api from '../../services/Api';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import {Alert} from 'react-native';

export default () => {
  const navigation = useNavigation();
  const {state: user} = React.useContext(UserContext);
  const [weightField, setWeightField] = React.useState('');
  const [heightField, setHeightField] = React.useState('');
  const [armsField, setArmsField] = React.useState('');
  const [legsField, setLegsField] = React.useState('');
  const [waistField, setWaistField] = React.useState('');
  const [chestField, setChestField] = React.useState('');

  const handleSignClick = async () => {
    if (
      weightField != '' &&
      heightField != '' &&
      armsField != '' &&
      legsField != '' &&
      waistField != ''
    ) {
      const token = await AsyncStorage.getItem('token');
      const gymStudentId = user?.id;
      const values = {
        weightField,
        heightField,
        armsField,
        legsField,
        waistField,
        gymStudentId,
      };

      let res = await Api.addProgressStudent(token, values);

      if (res) {
        Alert.alert('Eba!', 'Progresso cadastrado!');

        navigation.navigate('Home');
      } else {
        Alert.alert('Ops!', 'Deu erro ao cadastrar progresso!');
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
      <TitleForm>Cadastrar Progresso</TitleForm>
      <InputArea>
        <SigninInput
          placeholder="Peso"
          value={weightField}
          onChangeText={t => setWeightField(t)}
          marginOne
          radiusTop
        />
        <SigninInput
          placeholder="Altura"
          value={heightField}
          onChangeText={t => setHeightField(t)}
          marginOne
        />
        <SigninInput
          placeholder="Braço (Circunferência)"
          value={armsField}
          onChangeText={t => setArmsField(t)}
          marginOne
        />
        <SigninInput
          placeholder="Perna (Circunferência)"
          placeholder="Perna (Circunferência)"
          value={legsField}
          onChangeText={t => setLegsField(t)}
          marginOne
        />
        <SigninInput
          placeholder="Cintura (Circunferência)"
          value={waistField}
          onChangeText={t => setWaistField(t)}
          marginOne
        />
        <SigninInput
          placeholder="Peito (Circunferência)"
          value={chestField}
          onChangeText={t => setChestField(t)}
          marginOne
          radiusBottom
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Cadastrar Progresso</CustomButtonText>
        </CustomButton>
        <TextEdit onPress={handleGoHome}>Cancelar</TextEdit>
      </InputArea>
    </Container>
  );
};

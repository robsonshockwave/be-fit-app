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
    const token = await AsyncStorage.getItem('token');
    const gymStudentId = user?.id;

    if (
      weightField != '' &&
      heightField != '' &&
      armsField != '' &&
      legsField != '' &&
      waistField != ''
    ) {
      let res = await Api.addProgressStudent(
        weightField,
        heightField,
        armsField,
        legsField,
        waistField,
        gymStudentId,
        token,
      );

      if (res) {
        alert('Progresso cadastrado!');

        navigation.navigate('Home');
      } else {
        alert('Deu erro!');
      }
    } else {
      alert('Preencha todos os campos!');
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
          placeholder="Braço"
          value={armsField}
          onChangeText={t => setArmsField(t)}
          marginOne
        />
        <SigninInput
          placeholder="Perna"
          value={legsField}
          onChangeText={t => setLegsField(t)}
          marginOne
        />
        <SigninInput
          placeholder="Cintura"
          value={waistField}
          onChangeText={t => setWaistField(t)}
          marginOne
        />
        <SigninInput
          placeholder="Peito"
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

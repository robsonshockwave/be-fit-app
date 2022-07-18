import React from 'react';
import SigninInput from '../../components/SigninInput';
import {
  Container,
  TextTitle,
  InputArea,
  CustomButton,
  CustomButtonText,
  TitleForm,
  TextEdit,
} from './styles';
import Api from '../../services/Api';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import {Alert, ScrollView} from 'react-native';

export default () => {
  const navigation = useNavigation();
  const {state: user} = React.useContext(UserContext);
  const [nameField, setNameField] = React.useState('');
  const [emailField, setEmailField] = React.useState('');
  const [goalsField, setGoalsField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

  const handleSignClick = async () => {
    const token = await AsyncStorage.getItem('token');

    const personalId = user.id;

    if (
      nameField != '' &&
      emailField != '' &&
      passwordField != '' &&
      goalsField != ''
    ) {
      let res = await Api.signUp(
        nameField,
        emailField,
        passwordField,
        goalsField,
        personalId,
        token,
      );

      if (res) {
        Alert.alert('Eba!', 'Aluno cadastrado!');

        navigation.navigate('Home');
      } else {
        Alert.alert('Ops!', 'Error: ' + res.error);
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
      <ScrollView
        style={{
          flex: 1,
          width: '100%',
          marginBottom: 100,
        }}>
        <TextTitle>BE FIT</TextTitle>

        <TitleForm>Cadastrar aluno</TitleForm>
        <InputArea>
          <SigninInput
            placeholder="Nome do aluno"
            value={nameField}
            onChangeText={t => setNameField(t)}
            marginOne
            radiusTop
          />
          <SigninInput
            placeholder="Objetivo do aluno"
            value={goalsField}
            onChangeText={t => setGoalsField(t)}
            marginOne
          />
          <SigninInput
            placeholder="E-mail do aluno"
            value={emailField}
            onChangeText={t => setEmailField(t)}
            marginOne
            // radiusBottom
          />
          <SigninInput
            placeholder="Senha"
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            password={true}
            marginOne
            radiusBottom
          />
          <CustomButton onPress={handleSignClick}>
            <CustomButtonText>Cadastrar aluno</CustomButtonText>
          </CustomButton>
          <TextEdit onPress={handleGoHome}>Cancelar</TextEdit>
        </InputArea>
      </ScrollView>
    </Container>
  );
};

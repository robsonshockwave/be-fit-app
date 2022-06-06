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

export default () => {
  const navigation = useNavigation();
  const [nameField, setNameField] = React.useState('');
  const [emailField, setEmailField] = React.useState('');
  const [goalsField, setGoalsField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

  const handleSignClick = async () => {
    if (
      nameField != '' &&
      emailField != '' &&
      passwordField != '' &&
      goalsField != ''
    ) {
      const personalId = 1;
      let res = await Api.signUp(
        nameField,
        emailField,
        passwordField,
        goals,
        personalId,
      );
      console.log(res);

      if (res) {
        alert('Aluno cadastrado!');

        navigation.navigate('Home');
      } else {
        alert('Error: ' + res.error);
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
    </Container>
  );
};

import React from 'react';
import SigninInput from '../../components/SigninInput';
import {
  Container,
  TextTitle,
  InputArea,
  CustomButton,
  CustomButtonText,
  TitleForm,
} from './styles';
import {UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
  const {dispatch: userDispatch} = React.useContext(UserContext);
  const [nameField, setNameField] = React.useState('');
  const [emailField, setEmailField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

  const handleSignClick = async () => {
    if (nameField != '' && emailField != '' && passwordField != '') {
      let res = await Api.signUp(nameField, emailField, passwordField);
      console.log(res);

      if (res.token) {
        await AsyncStorage.setItem('token', res.token);

        userDispatch({
          type: 'setName',
          payload: {
            name: res.data.name,
          },
        });

        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        alert('Error: ' + res.error);
      }
    } else {
      alert('Preencha todos os campos!');
    }
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
      </InputArea>
    </Container>
  );
};

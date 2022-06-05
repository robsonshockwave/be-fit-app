import React from 'react';
import SigninInput from '../../components/SigninInput';
import {
  Container,
  TextTitle,
  InputArea,
  CustomButton,
  CustomButtonText,
} from './styles';
import {UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
  const {dispatch: userDispatch} = React.useContext(UserContext);
  const [nameField, setNameField] = React.useState('');
  const [emailField, setEmailField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');
  const [ageField, setAgeField] = React.useState('');

  const handleSignClick = async () => {
    if (
      nameField != '' &&
      emailField != '' &&
      passwordField != '' /* &&
      age != '' */
    ) {
      let res = await Api.signUp(
        nameField,
        emailField,
        passwordField,
        // ageField,
      );
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

      <InputArea>
        <SigninInput
          placeholder="Nome do aluno"
          value={nameField}
          onChangeText={t => setNameField(t)}
        />
        <SigninInput
          placeholder="E-mail do aluno"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />
        <SigninInput
          placeholder="Senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          password={true}
        />
        <SigninInput
          placeholder="Idade do aluno"
          value={ageField}
          onChangeText={t => setAgeField(t)}
        />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR ALUNO</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};

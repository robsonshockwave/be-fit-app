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

import Api from '../../services/Api';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
  const {dispatch: userDispatch} = React.useContext(UserContext);
  const [emailField, setEmailField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

  const navigation = useNavigation();

  const handleSignClick = async () => {
    if (emailField != '' && passwordField != '') {
      let res = await Api.signIn(emailField, passwordField);
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
        alert('E-mail e/ou senha inválidos!');
      }
    } else {
      alert('Preencha os campos!');
    }
  };

  const handleSignUpClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <TextTitle>BE FIT</TextTitle>

      <InputArea>
        <SigninInput
          placeholder="Usuário"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />
        <SigninInput
          placeholder="Senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          password={true}
        />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>ENTRAR</CustomButtonText>
        </CustomButton>
        <CustomButton onPress={handleSignUpClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};

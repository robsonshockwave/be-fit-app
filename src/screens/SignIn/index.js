import React from 'react';
import SigninInput from '../../components/SigninInput';
import {
  Container,
  TextTitle,
  InputArea,
  CustomButton,
  CustomButtonText,
} from './styles';

export default () => {
  const [emailField, setEmailField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

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
        <CustomButton>
          <CustomButtonText>ENTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};

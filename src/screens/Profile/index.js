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
import {UserContext} from '../../contexts/UserContext';

import Api from '../../services/Api';

export default () => {
  const [nameField, setNameField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

  const [editProfile, setEditProfile] = React.useState(false);

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleAttClick = async () => {
    if (nameField != '' && passwordField != '') {
      let res = await Api.attAccountData(nameField, passwordField);
      console.log(res);

      if (res) {
        // userDispatch({
        //   type: 'setName',
        //   payload: {
        //     name: res.data.name,
        //   },
        // });
      } else {
        alert('Ocorreu um erro!');
      }
    } else {
      alert('Preencha os campos!');
    }

    setEditProfile(false);
  };

  return (
    <Container>
      <TextTitle>BE FIT</TextTitle>

      <InputArea>
        {!editProfile ? (
          <>
            <TitleForm>Dados da conta</TitleForm>
            <SigninInput
              placeholder="Nome"
              editable={false}
              marginOne
              radiusTop
            />
            <SigninInput
              placeholder="E-mail"
              editable={false}
              marginOne
              radiusBottom
            />
            <TextEdit onPress={handleEditProfile}>
              Deseja alterar o nome e senha?
            </TextEdit>
          </>
        ) : (
          <>
            <TitleForm>Alteração de dados</TitleForm>
            <SigninInput
              placeholder="Nome do usuário"
              value={nameField}
              onChangeText={t => {
                setNameField(t);
              }}
              marginOne
              radiusTop
            />
            <SigninInput
              placeholder="Nova senha"
              value={passwordField}
              onChangeText={t => {
                setPasswordField(t);
              }}
              password={true}
              marginOne
              radiusBottom
            />
            <TextEdit onPress={handleEditProfile}>Cancelar</TextEdit>
            <CustomButton onPress={handleAttClick}>
              <CustomButtonText>Atualizar</CustomButtonText>
            </CustomButton>
          </>
        )}
      </InputArea>
    </Container>
  );
};

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
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  const {state: resultUser, dispatch: userDispatch} =
    React.useContext(UserContext);
  const {id, name, email, useType} = resultUser;
  const [nameField, setNameField] = React.useState(name);
  const [passwordField, setPasswordField] = React.useState('');
  const [emailField, setEmailField] = React.useState(email);
  const [editProfile, setEditProfile] = React.useState(false);

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleAttClick = async () => {
    const token = await AsyncStorage.getItem('token');

    if (useType === 'G') {
      if (nameField != '' && passwordField != '') {
        let res = await Api.attAccountDataStudent(
          nameField,
          passwordField,
          id,
          token,
        );

        if (res) {
          const newData = await Api.getProfile(id, token);

          userDispatch({
            type: 'setName',
            payload: {
              name: newData.name,
            },
          });
          userDispatch({
            type: 'setEmail',
            payload: {
              email: newData.email,
            },
          });

          alert('Dados atualizado!');
          navigation.navigate('Home');
        } else {
          alert('Error: ' + res.error);
        }
      } else {
        alert('Preencha os campos!');
      }
    } else {
      if (nameField != '' && emailField != '' && passwordField != '') {
        let res = await Api.attAccountDataPersonal(
          nameField,
          passwordField,
          emailField,
          id,
          token,
        );

        if (res) {
          userDispatch({
            type: 'setName',
            payload: {
              name: newData.name,
            },
          });
          userDispatch({
            type: 'setEmail',
            payload: {
              email: newData.email,
            },
          });

          console.log('resss', res);

          alert('Dados atualizados!');
          navigation.navigate('Home');
        } else {
          alert('Error: ' + res.error);
        }
      } else {
        alert('Preencha os campos!');
      }

      setEditProfile(false);
    }
  };

  React.useEffect(() => {
    const chamar = async () => {
      const token = await AsyncStorage.getItem('token');
      const res = await Api.getProfile(id, token);
      console.log(res, 'hahahaqhha');
    };

    chamar();
  }, []);

  return (
    <Container>
      <TextTitle>BE FIT</TextTitle>

      <InputArea>
        {!editProfile ? (
          <>
            {console.log(name, email)}
            <TitleForm>Dados da conta</TitleForm>
            <SigninInput
              placeholder={name}
              editable={false}
              marginOne
              radiusTop
            />
            <SigninInput
              placeholder={email}
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
            {useType === 'P' && (
              <SigninInput
                placeholder="E-mail"
                value={emailField}
                onChangeText={t => {
                  setEmailField(t);
                }}
                marginOne
              />
            )}
            <SigninInput
              placeholder="Senha"
              value={passwordField}
              onChangeText={t => {
                setPasswordField(t);
              }}
              password={true}
              marginOne
              radiusBottom
            />
            <CustomButton onPress={handleAttClick}>
              <CustomButtonText>Atualizar</CustomButtonText>
            </CustomButton>
            <TextEdit onPress={handleEditProfile}>Cancelar</TextEdit>
          </>
        )}
      </InputArea>
    </Container>
  );
};

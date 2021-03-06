import React from 'react';
import SigninInput from '../../components/SigninInput';
import {
  Container,
  TextTitle,
  InputArea,
  CustomButton,
  CustomButtonText,
  TextTypeUser,
  WrapperOptions,
  TextLogin,
} from './styles';
import {UserContext} from '../../contexts/UserContext';

import Api from '../../services/Api';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import jwt_decode from 'jwt-decode';
import {Alert, ScrollView} from 'react-native';

export default () => {
  const {dispatch: userDispatch, state: user} = React.useContext(UserContext);
  const [emailField, setEmailField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');
  const [typeUserField, setTypeUserField] = React.useState('');
  const [typeUserIndexField, setTypeUserIndexField] = React.useState('');

  const navigation = useNavigation();

  const handleSignClick = async () => {
    if (emailField != '' && passwordField != '' && typeUserField != '') {
      let res = await Api.signIn(emailField, passwordField, typeUserField);

      const decoded = jwt_decode(res.access_token);
      if (res) {
        await AsyncStorage.setItem('token', res.access_token);

        userDispatch({
          type: 'setUseType',
          payload: {
            useType: decoded.useType,
          },
        });
        userDispatch({
          type: 'setName',
          payload: {
            name: decoded.name,
          },
        });
        userDispatch({
          type: 'setEmail',
          payload: {
            email: decoded.email,
          },
        });
        userDispatch({
          type: 'setId',
          payload: {
            id: decoded.id,
          },
        });

        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        Alert.alert('Epa!', 'E-mail e/ou senha inválidos!');
      }
    } else {
      Alert.alert('Epa!', 'Preencha os campos!');
    }
  };

  var radioProps = [
    {label: '🤓 Aluno', value: 'G'},
    {label: 'Personal 👨‍🏫', value: 'P'},
  ];

  return (
    <Container>
      <TextTitle>BE FIT</TextTitle>

      <ScrollView
        style={{flex: 1, width: '100%', paddingTop: 130, paddingBottom: 80}}>
        <InputArea>
          <TextLogin>Realizar login:</TextLogin>
          <SigninInput
            placeholder="E-mail"
            value={emailField}
            onChangeText={t => setEmailField(t)}
            marginOne
            radiusTop
          />
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

          <TextTypeUser>Você é:</TextTypeUser>
          <WrapperOptions>
            {radioProps.map((obj, i) => (
              <RadioButton
                formHorizontal={true}
                labelHorizontal={false}
                key={i}
                style={{
                  marginLeft: i === 0 ? 0 : 15,
                  marginRight: i === 1 ? 15 : 0,
                }}>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={typeUserIndexField === i}
                  onPress={value => {
                    setTypeUserField(value);
                    setTypeUserIndexField(i);
                  }}
                  borderWidth={2}
                  buttonInnerColor={'#30A960'}
                  buttonOuterColor={
                    typeUserIndexField === i ? '#30A960' : '#4F5967'
                  }
                  buttonSize={16}
                  buttonOuterSize={26}
                  buttonStyle={{flexDirection: 'row'}}
                  buttonWrapStyle={{marginLeft: 10}}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={() => {}}
                  labelStyle={{
                    fontSize: 13,
                    color: typeUserIndexField === i ? '#30A960' : '#4F5967',
                    flexDirection: 'row',
                  }}
                  labelWrapStyle={{flexDirection: 'row'}}
                />
              </RadioButton>
            ))}
          </WrapperOptions>
          <CustomButton onPress={handleSignClick}>
            <CustomButtonText>Entrar</CustomButtonText>
          </CustomButton>
        </InputArea>
      </ScrollView>
    </Container>
  );
};

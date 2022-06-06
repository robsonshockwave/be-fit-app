import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  ButtonLogout,
  Container,
  HeaderTitle,
  TextHello,
  TextLogout,
  WrapperHeader,
} from './styles.';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  const signOut = async () => {
    await AsyncStorage.removeItem('token');

    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <WrapperHeader>
        <HeaderTitle>BE FIT</HeaderTitle>
        <ButtonLogout onPress={signOut}>
          <TextLogout>SAIR</TextLogout>
        </ButtonLogout>
      </WrapperHeader>
      <TextHello>Olá, usuário!</TextHello>
    </Container>
  );
};

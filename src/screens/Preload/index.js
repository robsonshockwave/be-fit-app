import React from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import LogoSvg from '../../assets/logo.svg';

export default () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        // token validate
      } else {
        navigation.navigate('SignIn');
      }
    };

    setTimeout(() => {
      checkToken();
    }, 1000);
  }),
    [];

  return (
    <Container>
      <LogoSvg width="100%" height="160" />
      <LoadingIcon size="large" color="#4F5967" />
    </Container>
  );
};

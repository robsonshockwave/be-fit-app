import React from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';
import jwt_decode from 'jwt-decode';
import Api from '../../services/Api';
import LogoSvg from '../../assets/logo.svg';

export default () => {
  const navigation = useNavigation();
  const {dispatch: userDispatch} = React.useContext(UserContext);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      // let res = await Api.checkToken(token);
      const decoded = jwt_decode(token);

      await AsyncStorage.setItem('token', token);

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
      navigation.navigate('SignIn');
    }
  };

  React.useEffect(() => {
    setTimeout(async () => {
      await checkToken();
    }, 1000);
  }, []);

  return (
    <Container>
      <LogoSvg width="100%" height="160" />
      <LoadingIcon size="large" color="#4F5967" />
    </Container>
  );
};

import React from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';

import Api from '../../services/Api';

import LogoSvg from '../../assets/logo.svg';

export default () => {
  const navigation = useNavigation();
  const {dispatch: userDispatch} = React.useContext(UserContext);

  React.useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        let res = await Api.checkToken(token);

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
          navigation.navigate('SignIn');
        }
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

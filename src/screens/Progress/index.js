import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Alert, RefreshControl} from 'react-native';
import {UserContext} from '../../contexts/UserContext';
import Api from '../../services/Api';
import {
  Container,
  ProgressView,
  TextName,
  TextRecord,
  TextRecordTitle,
  TextType,
  TextVerifyProgress,
  VerifyProgressButton,
  WrapperStudentRecord,
  WrapperTitle,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const {state: resultUser} = React.useContext(UserContext);
  const [listProgress, setListProgress] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const requestListProgress = async () => {
    const token = await AsyncStorage.getItem('token');
    const studentId = resultUser.id;
    let res = await Api.getListProgress(studentId, token);

    if (res) {
      setListProgress(res);
    } else {
      Alert.alert(
        'Ops!',
        'Ops, ocorreu um erro ao carregar a lista de progresso!',
      );
    }
  };

  const onRefresh = () => {
    setRefreshing(false);
    requestListProgress();
  };

  React.useEffect(() => {
    requestListProgress();
  }, []);

  return (
    <Container>
      <WrapperTitle>
        <TextName>👌 Seus progressos</TextName>
        <VerifyProgressButton
          onPress={() => {
            navigation.navigate('AddProgress');
          }}>
          <TextVerifyProgress>Adicionar progresso</TextVerifyProgress>
        </VerifyProgressButton>
      </WrapperTitle>

      <ProgressView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {listProgress &&
          listProgress?.map((values, index) => {
            return (
              <WrapperStudentRecord key={index}>
                <TextRecordTitle>Data: </TextRecordTitle>
                <TextType>Medidas Corporais</TextType>
                <TextRecord>Peso: </TextRecord>
                <TextRecord>Altura: </TextRecord>
                <TextType>Circunferências</TextType>
                <TextRecord>Braço: </TextRecord>
                <TextRecord>Perna: </TextRecord>
                <TextRecord>Cintura: </TextRecord>
                <TextRecord>Peito: </TextRecord>
              </WrapperStudentRecord>
            );
          })}
      </ProgressView>
    </Container>
  );
};

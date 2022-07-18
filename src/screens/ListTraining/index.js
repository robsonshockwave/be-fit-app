import React from 'react';
import {
  Container,
  DeleteTrainingButton,
  TextTitle,
  TrainingCard,
  TrainingName,
  TrainingsView,
  TrainingType,
  TrainingWrapper,
  WrapperTitle,
} from './styles';
import DeleteIcon from '../../assets/delete-icon.svg';
import {UserContext} from '../../contexts/UserContext';
import {Alert, RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../services/Api';

export default () => {
  const {state: resultUser} = React.useContext(UserContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [listTrainings, setListTrainings] = React.useState([]);

  const requestListTrainings = async () => {
    const personalId = resultUser?.id;
    const token = await AsyncStorage.getItem('token');
    let res = await Api.getAllVideos(personalId, token);
    setListTrainings(res);
  };

  const handleDeleteTraining = async id => {
    const token = await AsyncStorage.getItem('token');
    let res = await Api.deleteTraining(id, token);

    if (res) {
      requestListTrainings();
    } else {
      Alert.alert('Ops!', 'Ops, ocorreu um erro ao deletar o treino!');
    }
  };

  const onRefresh = () => {
    setRefreshing(false);
    requestListTrainings();
  };

  React.useEffect(() => {
    requestListTrainings();
  }, []);

  return (
    <Container>
      <WrapperTitle>
        <TextTitle>🏋️ Treinos</TextTitle>
      </WrapperTitle>
      <TrainingsView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {listTrainings &&
          listTrainings?.map((values, index) => (
            <TrainingCard key={index} onPress={() => {}}>
              <TrainingWrapper>
                <TrainingName>{values.name.trim()}</TrainingName>
                <TrainingType>{values.category.trim()}</TrainingType>
              </TrainingWrapper>
              <DeleteTrainingButton
                onPress={() => {
                  handleDeleteTraining(values.id);
                }}>
                <DeleteIcon fill="red" height="28" width="28" />
              </DeleteTrainingButton>
            </TrainingCard>
          ))}
      </TrainingsView>
    </Container>
  );
};

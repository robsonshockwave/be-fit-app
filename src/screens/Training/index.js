import React from 'react';
import {
  Container,
  CustomButton,
  CustomButtonText,
  InputArea,
  TextEdit,
  TextPreVideo,
  TextTitle,
  TextUploadVideo,
  TextVideoExist,
  TitleForm,
  UploadButton,
} from './styles';
import SigninInput from '../../components/SigninInput';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import VideoPlayer from 'react-native-video-player';
import Api from '../../services/Api';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import {Alert} from 'react-native';

export default () => {
  const navigation = useNavigation();
  const {state: resultUser} = React.useContext(UserContext);
  const [nameField, setNameField] = React.useState('');
  const [typeField, setTypeField] = React.useState('');
  const [videoField, setVideoField] = React.useState();
  const [preVideo, setPrevideo] = React.useState();

  const handleAddTraining = async () => {
    const personalId = resultUser?.id;
    const token = await AsyncStorage.getItem('token');

    if (nameField != '' && typeField != '') {
      console.log(videoField);
      let res = await Api.createTraining(
        typeField,
        nameField,
        videoField,
        personalId,
        token,
      );

      console.log(res);

      if (res) {
        Alert.alert('Eba!', 'Vídeo cadastrado!');

        navigation.navigate('Home');
      } else {
        Alert.alert('Ops!', 'Error: ' + res.error);
      }
    } else {
      Alert.alert('Epa!', 'Preencha todos os campos!');
    }
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  const imagePickerCallback = async data => {
    const video = data;
    const formdata = new FormData();
    formdata.append('videoFile', {
      uri: video.assets[0].uri,
      type: video.assets[0].type,
      name: video.assets[0].fileName + '.mp4',
    });

    setPrevideo(formdata);

    let res = await Api.uploadVideo(formdata);

    setVideoField(res);
  };

  const options = {
    mediaType: 'video',
    videoQuality: 'low',
    includeBase64: true,
  };

  return (
    <Container>
      <TextTitle>BE FIT</TextTitle>
      <TitleForm>Cadastrar treino</TitleForm>
      <InputArea>
        <SigninInput
          placeholder="Nome do treino"
          value={nameField}
          onChangeText={t => setNameField(t)}
          marginOne
          radiusTop
        />
        <SigninInput
          placeholder="Tipo do treino"
          value={typeField}
          onChangeText={t => setTypeField(t)}
          marginOne
        />

        <UploadButton
          onPress={() => {
            launchImageLibrary(options, imagePickerCallback);
          }}>
          <TextUploadVideo>
            + Upload do vídeo
            <TextVideoExist style={{color: videoField ? '#ADFF2F' : 'red'}}>
              {videoField ? '\nVÍDEO CARREGADO' : '\nSEM VÍDEO'}
            </TextVideoExist>
          </TextUploadVideo>
        </UploadButton>

        {preVideo && (
          <>
            <TextPreVideo>Pré visualização</TextPreVideo>
            <VideoPlayer
              video={{
                uri: preVideo._parts[0][1].uri,
                // uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              videoWidth={1600}
              videoHeight={900}
              disableFullscreen={false}
            />
          </>
        )}

        <CustomButton disabled={!videoField} onPress={handleAddTraining}>
          <CustomButtonText>Adicionar treino</CustomButtonText>
        </CustomButton>
        <TextEdit onPress={handleGoHome}>Cancelar</TextEdit>
      </InputArea>
    </Container>
  );
};

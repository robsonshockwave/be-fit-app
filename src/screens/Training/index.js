import React, {useEffect} from 'react';
import {
  Container,
  CustomButton,
  CustomButtonText,
  InputArea,
  TextEdit,
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
import RNFS from 'react-native-fs';
import {Text} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export default ({route}) => {
  const navigation = useNavigation();
  const [teste, setTeste] = React.useState();
  const [student, setStudent] = React.useState({});
  const [nameField, setNameField] = React.useState('');
  const [typeField, setTypeField] = React.useState('');
  const [videoField, setVideoField] = React.useState();

  React.useEffect(() => {
    setStudent(route.params);
  }, []);

  const handleAddTraining = async () => {
    const token = await AsyncStorage.getItem('token');

    const personalId = user.id;

    if (nameField != '' && typeField != '' && videoField != '') {
      // let res = await Api.addTraining(
      //   nameField,
      //   typeField,
      //   videoField,
      //   student.id,
      //   personalId,
      //   token,
      // );

      // if (res) {
      //   alert('Treino cadastrado!');

      //   navigation.navigate('Home');
      // } else {
      //   alert('Error: ' + res.error);
      // }

      console.log('Foi');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  const imagePickerCallback = async data => {
    console.log(data);
    const video = data;
    const formdata = new FormData();
    formdata.append('videoFile', {
      uri: video.assets[0].uri,
      type: 'video.mp4',
      name: video.assets[0].fileName,
    });

    setVideoField(formdata);

    RNFS.readFile(video.assets[0].uri, 'base64')
      .then(res => {
        setTeste(res);
      })
      .catch(err => {
        console.log(err.message, err.code);
      });

    console.log(formdata._parts[0], 'formdata');
  };

  const options = {
    mediaType: 'video',
    videoQuality: 'low',
    includeBase64: true,
  };

  return (
    <Container>
      <TextTitle>BE FIT</TextTitle>
      <TitleForm>Cadastrar treino para </TitleForm>
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

        <UploadButton>
          <TextUploadVideo
            onPress={() => {
              launchImageLibrary(options, imagePickerCallback);
            }}>
            + Upload do vídeo
            <TextVideoExist style={{color: videoField ? '#ADFF2F' : 'red'}}>
              {videoField ? '\nVÍDEO CARREGADO' : '\nSEM VÍDEO'}
            </TextVideoExist>
          </TextUploadVideo>
        </UploadButton>

        <CustomButton onPress={handleAddTraining}>
          <CustomButtonText>Adicionar treino</CustomButtonText>
        </CustomButton>
        <TextEdit onPress={handleGoHome}>Cancelar</TextEdit>

        {videoField && (
          <VideoPlayer
            video={{
              uri: videoField._parts[0][1].uri,
              // uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            videoWidth={1600}
            videoHeight={900}
            disableFullscreen={false}
          />
        )}
      </InputArea>
    </Container>
  );
};

import React from 'react';
import {ScrollView} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {
  Container,
  TextAtent,
  TextNameTraining,
  TextTypeTraining,
  VideoContainer,
  WrapperTitle,
} from './styles';

export default ({route}) => {
  const [video, setVideo] = React.useState({});

  React.useEffect(() => {
    setVideo(route.params);
  }, []);

  return (
    <Container>
      <VideoContainer>
        <VideoPlayer
          video={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          videoWidth={1600}
          videoHeight={900}
          customStyles={{zIndex: 100}}
          fullScreenOnLongPress
        />
        <WrapperTitle>
          <TextNameTraining>Nome do treino</TextNameTraining>
          <TextTypeTraining>Tipo do treino: {video.category}</TextTypeTraining>
        </WrapperTitle>
        <TextAtent>
          Para melhor visualização do vídeo-aula rotacione a tela.
        </TextAtent>
      </VideoContainer>
    </Container>
  );
};

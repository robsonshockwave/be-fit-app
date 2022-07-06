import React from 'react';
import VideoPlayer from 'react-native-video-player';
import {
  Container,
  TextAtent,
  TextNameTraining,
  TextTypeTraining,
  VideoContainer,
  WrapperTitle,
} from './styles';

export default () => {
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
          <TextTypeTraining>Tipo do treino</TextTypeTraining>
        </WrapperTitle>
        <TextAtent>
          Para melhor visualização do vídeo-aula rotacione a tela.
        </TextAtent>
      </VideoContainer>
    </Container>
  );
};

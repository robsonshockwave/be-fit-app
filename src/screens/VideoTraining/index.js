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
import {useIsFocused} from '@react-navigation/native';

export default ({route}) => {
  const [video, setVideo] = React.useState({});
  const isFocused = useIsFocused();

  React.useEffect(() => {
    setVideo(route.params);
  }, [isFocused]);

  return (
    <Container>
      <VideoContainer>
        <VideoPlayer
          video={{
            uri: video?.url,
          }}
          videoWidth={1600}
          videoHeight={900}
          customStyles={{zIndex: 100}}
          fullScreenOnLongPress
        />
        <WrapperTitle>
          <TextNameTraining>{video.name}</TextNameTraining>
          <TextTypeTraining>Tipo do treino: {video.category}</TextTypeTraining>
        </WrapperTitle>
        <TextAtent>
          Para melhor visualização do vídeo-aula rotacione a tela.
        </TextAtent>
      </VideoContainer>
    </Container>
  );
};

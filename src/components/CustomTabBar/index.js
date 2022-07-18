import React from 'react';
import {Container, TabArea, TabItem, TextIcon} from './styles';

import HomeIcon from '../../assets/home.svg';
import ChatIcon from '../../assets/chat.svg';
import ProgressIcon from '../../assets/progress.svg';
import ProfileIcon from '../../assets/profile.svg';
import {UserContext} from '../../contexts/UserContext';

export default ({state, navigation}) => {
  const {state: resultUser} = React.useContext(UserContext);

  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <Container>
        <TabItem
          onPress={() => {
            goTo('Home');
          }}>
          <HomeIcon
            width="18"
            height="18"
            fill="#4F5967"
            style={{opacity: state.index === 0 ? 1 : 0.6}}
          />
          <TextIcon style={{opacity: state.index === 0 ? 1 : 0.6}}>
            Home
          </TextIcon>
        </TabItem>
        <TabItem
          onPress={() => {
            goTo('Chat');
          }}>
          <ChatIcon
            width="18"
            height="18"
            fill="#4F5967"
            style={{opacity: state.index === 1 ? 1 : 0.6}}
          />
          <TextIcon style={{opacity: state.index === 1 ? 1 : 0.6}}>
            Chat
          </TextIcon>
        </TabItem>
        {resultUser?.useType === 'G' ? (
          <TabItem
            onPress={() => {
              goTo('Progress');
            }}>
            <ProgressIcon
              width="18"
              height="18"
              fill="#4F5967"
              style={{opacity: state.index === 2 ? 1 : 0.6}}
            />
            <TextIcon style={{opacity: state.index === 2 ? 1 : 0.6}}>
              Progressos
            </TextIcon>
          </TabItem>
        ) : null}
        <TabItem
          onPress={() => {
            goTo('Profile');
          }}>
          <ProfileIcon
            width="20"
            height="20"
            fill="#4F5967"
            style={{opacity: state.index === 3 ? 1 : 0.7}}
          />
          <TextIcon style={{opacity: state.index === 3 ? 1 : 0.6}}>
            Perfil
          </TextIcon>
        </TabItem>
      </Container>
    </TabArea>
  );
};

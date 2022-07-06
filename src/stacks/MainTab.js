import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Progress from '../screens/Progress';
import Profile from '../screens/Profile';
import SignUp from '../screens/SignUp';
import Student from '../screens/Student';
import AddProgress from '../screens/AddProgress';
import CustomTabBar from '../components/CustomTabBar';
import Training from '../screens/Training';
import VideoTraining from '../screens/VideoTraining';
import VerifyProgress from '../screens/VerifyProgress';
import ListTraining from '../screens/ListTraining';
import AddTraining from '../screens/AddTraining';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Student" component={Student} />
      <Tab.Screen name="Training" component={Training} />
      <Tab.Screen name="AddProgress" component={AddProgress} />
      <Tab.Screen name="VideoTraining" component={VideoTraining} />
      <Tab.Screen name="VerifyProgress" component={VerifyProgress} />
      <Tab.Screen name="ListTraining" component={ListTraining} />
      <Tab.Screen name="AddTraining" component={AddTraining} />
    </Tab.Navigator>
  );
};

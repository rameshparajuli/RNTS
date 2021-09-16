import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import { AuthStackParamList } from '~/navigator/routes';
import {
  CreateBusinessScreen,
  CreateProfileScreen,
  SetupProfileScreen,
  SetupRoomScreen,
} from '~/screens';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = (): JSX.Element => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen
        name={'CREATE_PROFILE_SCREEN'}
        component={CreateProfileScreen}
      />
      <AuthStack.Screen
        name={'CREATE_BUSINESS_SCREEN'}
        component={CreateBusinessScreen}
      />
      <AuthStack.Screen
        name={'SETUP_PROFILE_SCREEN'}
        component={SetupProfileScreen}
      />
      <AuthStack.Screen
        name={'SETUP_ROOM_SCREEN'}
        component={SetupRoomScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

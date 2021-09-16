import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import AuthStack from './AuthStack';
import { MainStackParamList } from './routes';

const MainStack = createStackNavigator<MainStackParamList>();

// TODO: Bind logic with Authenticate user
const RootNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none">
        <MainStack.Screen name={'AUTH_STACK'} component={AuthStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

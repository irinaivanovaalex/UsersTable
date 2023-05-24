import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import React, {useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {UserScreen} from '../user/UserScreen';
import {UserListScreen} from '../user-list/UserListScreen';

const Stack = createNativeStackNavigator();

export const AppNavigation = observer(() => {
  const navigationRef =
    useRef<NavigationContainerRef<ReactNavigation.RootParamList>>(null);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerTransparent: false,
            animation: 'fade',
          }}>
          <Stack.Screen name="UserList" component={UserListScreen} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

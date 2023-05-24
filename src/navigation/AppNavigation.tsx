import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { UserScreen } from '../user/UserScreen'
import { UserListScreen } from '../user-list/UserListScreen'

const Stack = createNativeStackNavigator()

export const AppNavigation = observer(() => {
  const navigationRef = useRef<NavigationContainerRef<ReactNavigation.RootParamList>>(null)

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            animation: 'fade',
          }}
        >
          <Stack.Screen
            name="UserList"
            component={UserListScreen}
            options={{
              title: 'Users',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="User"
            component={UserScreen}
            options={{
              title: 'User full info',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerBackVisible: true,
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
})

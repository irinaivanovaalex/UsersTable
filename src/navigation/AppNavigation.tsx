import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { observer } from 'mobx-react-lite'
import { useRef } from 'react'
import { UserListScreen } from '../user-list/UserListScreen'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

export const AppNavigation = observer(() => {
    const navigationRef = useRef<NavigationContainerRef<ReactNavigation.RootParamList>>(null)
    const safeArea = useSafeAreaInsets()


    return <SafeAreaProvider>
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
         screenOptions={{
            headerShown: false,
            headerTransparent: false,
            animation: 'fade',
            contentStyle: {
              paddingTop: safeArea.top,
            },
          }}
        >
            <Stack.Screen 
            name='UserList'
            component={UserListScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
})
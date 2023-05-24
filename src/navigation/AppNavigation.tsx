import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { observer } from 'mobx-react-lite'
import { useRef } from 'react'
import { UserListScreen } from '../user-list/UserListScreen'

const Stack = createNativeStackNavigator()

export const AppNavigation = observer(() => {
    const navigationRef = useRef<NavigationContainerRef<ReactNavigation.RootParamList>>(null)

    return <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
            <Stack.Screen 
            name='UserList'
            component={UserListScreen}
            options={{ title: 'UserScreen' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
})
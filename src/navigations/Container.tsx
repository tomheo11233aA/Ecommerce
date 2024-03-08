import { screens } from "@contants/screens";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { navigationRef } from '@utils/navigationRef'
import Main from "./Main";
import Hello from "@screens/Hello";
import Search from "@screens/Search";

const Stack = createNativeStackNavigator()
const Container = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screens.HELLO} component={Hello} />
                <Stack.Screen name={screens.MAIN} component={Main} />
                <Stack.Screen name={screens.SEARCH} component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container

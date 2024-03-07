import { screens } from "@contants/screens";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Hello from "@screens/Hello";
import { navigationRef } from '@utils/navigationRef'

const Stack = createNativeStackNavigator()
const Container = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screens.HELLO} component={Hello} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container

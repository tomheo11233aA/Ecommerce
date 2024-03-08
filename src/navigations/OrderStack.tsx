import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Order from '@screens/Order'

const Stack = createNativeStackNavigator()
const OrderStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'ios'
        }}>
            <Stack.Screen name={screens.ORDER} component={Order} />
        </Stack.Navigator>
    )
}
export default OrderStack
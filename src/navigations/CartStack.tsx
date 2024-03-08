import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Cart from '@screens/Cart'

const Stack = createNativeStackNavigator()
const CartStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'ios'
        }}>
            <Stack.Screen name={screens.CART} component={Cart} />
        </Stack.Navigator>
    )
}
export default CartStack
import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Wallet from '@screens/Wallet'

const Stack = createNativeStackNavigator()
const WalletStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'ios'
        }}>
            <Stack.Screen name={screens.WALLET} component={Wallet} />
        </Stack.Navigator>
    )
}
export default WalletStack
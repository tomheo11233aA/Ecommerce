import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { screens } from '@contants/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Box from '@common/Box'
import { colors } from '@themes/colors'
import Txt from '@common/Txt'
import { useTranslation } from 'react-i18next'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'
import { Home2, Bag2, ShoppingCart, Wallet2, Profile } from 'iconsax-react-native'
import HomeStack from './HomeStack'
import CartStack from './CartStack'
import WalletStack from './WalletStack'
import ProfileStack from './ProfileStack'
import OrderStack from './OrderStack'

interface TabProps {
  size: number
  title: string
  component: React.FC
  name: string
  iconNotFocused: React.ReactNode
  iconFocused: React.ReactNode
}

const Tab = createBottomTabNavigator()
const AuthNavigation = () => {
  const { t } = useTranslation()
  const tab: TabProps[] = [
    {
      size: 24,
      title: 'Home',
      component: HomeStack,
      name: screens.HOMESTACK,
      iconNotFocused: <Home2 color={colors.gray} />,
      iconFocused: <Home2 variant='Bold' color={colors.mainColor} />
    },
    {
      size: 24,
      title: 'Cart',
      component: CartStack,
      name: screens.CARTSTACK,
      iconNotFocused: <Bag2 color={colors.gray} />,
      iconFocused: <Bag2 variant='Bold' color={colors.mainColor} />
    },
    {
      size: 24,
      title: 'Orders',
      component: OrderStack,
      name: screens.ORDERSTACK,
      iconNotFocused: <ShoppingCart color={colors.gray} />,
      iconFocused: <ShoppingCart variant='Bold' color={colors.mainColor} />
    },
    {
      size: 24,
      title: 'Wallet',
      component: WalletStack,
      name: screens.WALLETSTACK,
      iconNotFocused: <Wallet2 color={colors.gray} />,
      iconFocused: <Wallet2 variant='Bold' color={colors.mainColor} />
    },
    {
      size: 24,
      title: 'Profile',
      component: ProfileStack,
      name: screens.PROFILESTACK,
      iconNotFocused: <Profile color={colors.gray} />,
      iconFocused: <Profile variant='Bold' color={colors.mainColor} />
    }
  ]
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: BOTTOM_TAB_HEIGHT,
          paddingTop: 10,
          borderTopWidth: 1,
          backgroundColor: 'white',
          position: 'absolute',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }
      }}
    >
      {tab.map((item, index) => {
        return (
          <Tab.Screen
            key={item.title}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <Box
                  justifyCenter
                  alignCenter
                >
                  {focused ? item.iconFocused : item.iconNotFocused}
                  <Txt
                    center
                    size={12}
                    color={focused ? colors.mainColor : colors.gray}
                  >
                    {t(item.title)}
                  </Txt>
                </Box>
              )
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default React.memo(AuthNavigation)

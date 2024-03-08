import React from 'react'
import Box from '@common/Box'
import { width } from '@utils/responsive'
import LottieView from 'lottie-react-native'
import Img from '@common/Img'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import { useAppDispatch } from '@hooks/redux'
import { setLogin } from '@redux/slice/userSlice'

const Hello = () => {
    const dispatch = useAppDispatch()
    // dispatch(setLogin(false))
    React.useEffect(() => {
        setTimeout(() => {
            navigate(screens.MAIN)
        }, 500)
    }, [])
    return (
        <Box
            flex={1}
            alignCenter
            justifyCenter
            backgroundColor={'#11181e'}
        >
            <Img
                source={require('@images/logo.png')}
                width={width * 40 / 100}
                height={width * 40 / 100}
            />
            <LottieView
                source={require('@lotties/loading.json')}
                autoPlay
                loop
                style={{
                    width: width * 40 / 100,
                    height: width * 40 / 100,
                }}
            />
        </Box>
    )
}

export default Hello

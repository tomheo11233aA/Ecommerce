import React from 'react'
import Box from '@common/Box'
import Img from '@common/Img'
import { fonts } from '@themes/fonts'
import Txt from '@common/Txt'
import { Notification, Heart } from 'iconsax-react-native'

interface HeaderProps {
    t: any,
    time: string,
    color: any
}

const Header = ({ t, time, color }: HeaderProps) => {
    return (
        <Box row justifySpaceBetween alignCenter>
            <Img
                width={32}
                height={32}
                radius={16}
                source={require('@images/logo.png')}
            />
            <Box
                flex={1}
                marginLeft={20}
            >
                <Txt
                    size={16}
                >
                    {t('Good')} {time} {time === 'Morning' && '👋' || time === 'Afternoon' && '☀️' || time === 'Evening' && '🌙' || time === 'Night' && '🌃'}
                </Txt>
                <Txt
                    size={20}
                    fontFamily={fonts.MAINB}
                >
                    {t('DKTech')}
                </Txt>
            </Box>
            <Box
                marginLeft={20}
                row
            >
                <Notification
                    color={color.black}
                    size={25}
                />
                <Box width={20} />
                <Heart
                    color={color.black}
                    size={25}
                />
            </Box>
        </Box>
    )
}

export default React.memo(Header)
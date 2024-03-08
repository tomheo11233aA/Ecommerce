import React from "react"
import Box from "@common/Box"
import Txt from "@common/Txt"
import { fonts } from "@themes/fonts"
import { colors } from "@themes/colors"
import Btn from "@common/Btn"

interface TitleProps {
    title: string,
    t: any,
    onPress: () => void
}
const Title: React.FC<TitleProps> = ({ title, t, onPress }) => {
    return (
        <Box
            marginTop={20}
            row
            style={{
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Txt
                size={20}
                fontFamily={fonts.MAINB}
                fontWeight={'600'}
            >
                {t(title)}
            </Txt>
            <Btn
                marginVertical={5}
                marginHorizontal={10}
                onPress={onPress}
            >
                <Txt
                    size={14}
                    color={colors.mainColor}
                    fontWeight={'600'}
                    fontFamily={fonts.MAINB}
                >
                    {t('See All')}
                </Txt>
            </Btn>
        </Box>
    )
}

export default Title
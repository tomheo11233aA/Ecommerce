import React, { useEffect } from 'react'
import Input from '@common/Input'
import { width, height } from '@utils/responsive'
import { useTheme } from '@hooks/redux'
import { fonts } from '@themes/fonts'
import { useTranslation } from 'react-i18next'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Box from '@common/Box'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { AppDispatch } from '@redux/store/store'
import { addRecentSearch } from '@redux/slice/userSlice'
import RecentSearch from './RecentSearch'
import LottieView from 'lottie-react-native'
import Txt from '@common/Txt'
import { fakeDataResultSearch } from '@utils/fakeData'
import Item from './Item'
import { FlatList, SectionList } from 'react-native'
import { SvgImage } from '@reuse/SvgImage'
import { themeUserSelector } from '@redux/selector/appSelector'

interface Props {
    color: any,
    t: any
}

const Loading = ({ color, t }: Props) => {
    return (
        <>
            <LottieView
                source={require('@lotties/searching.json')}
                autoPlay
                loop
                style={{
                    width: width,
                    height: width,
                }}
            />
            <Txt size={16} color={color.white} fontFamily={fonts.MAINB} center>
                {t('Searching...')}
            </Txt>
        </>
    )
}

export default React.memo(Loading)
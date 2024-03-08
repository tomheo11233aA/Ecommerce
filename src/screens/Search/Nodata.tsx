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
    themeUser: any,
    search: string
    color: any,
    t: any,
}

const Nodata = ({ themeUser, search, color, t }: Props) => {
    return (
        <>
            {themeUser === 'light' ? (
                <Box
                    height={'100%'}
                >
                    <Box marginTop={height * 0.03} row justifySpaceBetween alignCenter>
                        <Txt size={16} color={color.white} fontFamily={fonts.MAINB}>
                            {t('Result for')}
                            <Txt size={16} color={color.mainColor} fontFamily={fonts.MAINB}>
                                {" "}"{`${search}`}"
                            </Txt>
                        </Txt>
                        <Txt size={16} color={color.mainColor} fontFamily={fonts.MAIN}>
                            {fakeDataResultSearch.length} {t('results')}
                        </Txt>
                    </Box>
                    <Box
                        marginTop={height * 0.1}
                        alignCenter
                    >
                        <SvgImage.LightNoData />
                        <Txt marginTop={height * 0.05} size={16} color={color.white} fontFamily={fonts.MAINB} center>
                            {t('Not found')}
                        </Txt>
                        <Txt marginTop={height * 0.05} size={16} color={color.white} center>
                            {t('Sorry, the keyword you entered cannot be found, please check again or search with another keyword.')}
                        </Txt>
                    </Box>
                </Box>
            ) : (
                <Box
                    height={'100%'}
                >
                    <Box marginTop={height * 0.03} row justifySpaceBetween alignCenter>
                        <Txt size={16} color={color.white} fontFamily={fonts.MAINB}>
                            {t('Result for')}
                            <Txt size={16} color={color.mainColor} fontFamily={fonts.MAINB}>
                                {" "}"{`${search}`}"
                            </Txt>
                        </Txt>
                        <Txt size={16} color={color.mainColor} fontFamily={fonts.MAIN}>
                            {fakeDataResultSearch.length} {t('results')}
                        </Txt>
                    </Box>
                    <Box
                        marginTop={height * 0.1}
                        alignCenter
                    >
                        <SvgImage.DarkNoData />
                        <Txt marginTop={height * 0.05} size={16} color={color.white} fontFamily={fonts.MAINB} center>
                            {t('Not found')}
                        </Txt>
                        <Txt marginTop={height * 0.05} size={16} color={color.white} center>
                            {t('Sorry, the keyword you entered cannot be found, please check again or search with another keyword.')}
                        </Txt>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default React.memo(Nodata)
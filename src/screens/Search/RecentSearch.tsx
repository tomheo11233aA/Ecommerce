import React from 'react'
import { width, height } from '@utils/responsive'
import { useTheme } from '@hooks/redux'
import { fonts } from '@themes/fonts'
import { useTranslation } from 'react-i18next'
import Box from '@common/Box'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { AppDispatch } from '@redux/store/store'
import { recentSearchesUserSelector } from '@redux/selector/appSelector'
import { clearAllRecentSearch, removeRecentSearch } from '@redux/slice/userSlice'
import Txt from '@common/Txt'
import { CloseSquare } from 'iconsax-react-native'
import Btn from '@common/Btn'

const RecentSearch = () => {
    const { t } = useTranslation()
    const color = useTheme()
    const dispatch: AppDispatch = useAppDispatch()
    const recentSearches = useAppSelector(recentSearchesUserSelector)
    return (
        <>
            <Box row marginTop={height * 0.05} alignCenter justifySpaceBetween>
                <Txt
                    fontFamily={fonts.MAINB}
                    size={16}
                    color={color.white}
                >
                    {t('Recent searches')}
                </Txt>

                <Txt
                    onPress={() => {
                        dispatch(clearAllRecentSearch())
                    }}
                    fontFamily={fonts.MAINB}
                    size={14}
                    color={color.mainColor}
                >
                    {t('Clear All')}
                </Txt>
            </Box>

            <Box width={'100%'} height={1} backgroundColor={color.gray} marginTop={height * 0.03} />

            {recentSearches.map((item, index) => {
                return (
                    <Btn
                        key={index}
                        row
                        alignCenter
                        justifySpaceBetween
                        onPress={() => {
                            console.log('item', item)
                        }}
                    >
                        <Txt
                            fontFamily={fonts.MAIN}
                            size={16}
                            color={'gray'}
                            flex={1}
                        >
                            {item}
                        </Txt>
                        <Btn
                            padding={width * 0.02}
                            onPress={() => {
                                dispatch(removeRecentSearch(item))
                            }}>
                            <CloseSquare size={width * 0.06} color={'gray'} />
                        </Btn>
                    </Btn>
                )
            }
            )}
        </>
    )
}

export default React.memo(RecentSearch)
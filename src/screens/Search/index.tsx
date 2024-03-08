import React from 'react'
import Input from '@common/Input'
import { width, height } from '@utils/responsive'
import { useTheme } from '@hooks/redux'
import { fonts } from '@themes/fonts'
import { useTranslation } from 'react-i18next'
import Box from '@common/Box'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { AppDispatch } from '@redux/store/store'
import { addRecentSearch } from '@redux/slice/userSlice'
import RecentSearch from './RecentSearch'
import Txt from '@common/Txt'
import { fakeDataResultSearch } from '@utils/fakeData'
import Item from './Item'
import { FlatList } from 'react-native'
import { themeUserSelector } from '@redux/selector/appSelector'
import Loading from './Loading'
import Nodata from './Nodata'

const Search = () => {
    const { t } = useTranslation()
    const color = useTheme()
    const [search, setSearch] = React.useState('')
    const dispatch: AppDispatch = useAppDispatch()
    const [isFocus, setIsFocus] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const themeUser = useAppSelector(themeUserSelector)
    return (
        <Box flex={1}
            backgroundColor={themeUser === 'light' ? color.black2 : color.black2}
        >
            <Box
                flex={1}
            >
                <Input
                    marginTop={height * 0.03}
                    height={height * 0.07}
                    width={width * 0.9}
                    hint={t('Search...')}
                    hintColor={'#5f5f5f'}
                    backgroundColor={color.input}
                    radius={width * 0.05}
                    color={color.white}
                    font={fonts.MAIN}
                    sizeIcon={width * 0.06}
                    iconOne={require('@images/auth/search.png')}
                    iconTwo={require('@images/auth/setting.png')}
                    value={search}
                    onChangeText={(text: string) => setSearch(text)}
                    tintColorIconTwo={color.mainColor}
                    onSubmitEditing={() => {
                        if (search.length > 0) {
                            dispatch(addRecentSearch(search));
                            setLoading(true)
                            setTimeout(() => {
                                setLoading(false)
                            }, 2000)
                        }
                        setIsFocus(false);
                    }}
                    onFocus={() => setIsFocus(true)}
                    autoFocus={true}
                    alignSelf={'center'}
                />
                <Box paddingHorizontal={width * 0.05}>
                    <>
                        {isFocus && (
                            <RecentSearch />
                        )}
                        {loading && (
                            <Loading color={color} t={t} />
                        )}
                        {fakeDataResultSearch.length > 0 && !loading && !isFocus && (
                            <>
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
                                <FlatList
                                    data={fakeDataResultSearch}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <Item
                                                item={item}
                                            />
                                        )
                                    }}
                                    numColumns={2}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </>
                        )}
                        {fakeDataResultSearch.length === 0 && !loading && !isFocus && (
                            <Nodata
                                color={color}
                                search={search}
                                t={t}
                                themeUser={themeUser}
                            />
                        )}
                    </>
                </Box>
            </Box>
        </Box >
    )
}

export default Search
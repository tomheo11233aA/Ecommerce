import React from 'react'
import { SearchNormal1, Setting4 } from 'iconsax-react-native'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'

interface SearchProps {
    height: number,
    width: number,
    color: any,
    t: any
}

const Search = ({ t, height, width, color }: SearchProps) => {
    return (
        <Btn
            onPress={() => navigate(screens.SEARCH)}
            row
            marginTop={height * 0.03}
            width={width * 0.9}
            height={height * 0.07}
            backgroundColor={color.input}
            radius={width * 0.05}
            alignCenter
            paddingHorizontal={width * 0.03}
            justifySpaceBetween
        >
            <SearchNormal1 color={color.black} size={width * 0.06} />
            <Txt flex={1} size={16} marginLeft={width * 0.04} color={color.black}>{t('Search...')}</Txt>
            <Setting4 color={color.mainColor} variant='Bold' size={width * 0.06} />
        </Btn>
    )
}


export default React.memo(Search)
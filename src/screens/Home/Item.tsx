import React from 'react'
import Box from '@common/Box'
import Img from '@common/Img'
import { fonts } from '@themes/fonts'
import Txt from '@common/Txt'
import { width, height } from '@utils/responsive'
import { colors } from '@themes/colors'
import Btn from '@common/Btn'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

interface ItemProps {
    item: any,
    numberOfLines?: number
}

let BORDER_WIDTH = 1
const Item: React.FC<ItemProps> = ({ item, numberOfLines }) => {
    return (
        <>
            <Btn
                marginTop={height * 0.02}
                borderWidth={BORDER_WIDTH}
                borderColor={colors.gray4}
                marginRight={width * 0.05}
                width={width * 0.5}
                radius={width * 0.05}
            >
                <Img
                    source={{ uri: item.image }}
                    width={width * 0.4}
                    height={height * 0.2}
                    resizeMode='contain'
                />
                <Box
                    backgroundColor={colors.gray5}
                    width={'100%'}
                    paddingVertical={5}
                    paddingHorizontal={10}
                    style={{
                        borderBottomLeftRadius: width * 0.05 - 2 * BORDER_WIDTH,
                        borderBottomRightRadius: width * 0.05 - 2 * BORDER_WIDTH,
                    }}
                >
                    <Txt
                        size={14}
                        fontFamily={fonts.MAINB}
                        fontWeight={'600'}
                        marginTop={5}
                        numberOfLines={numberOfLines}
                    >
                        {item.name}
                    </Txt>
                    <StarRatingDisplay
                        rating={item.rating}
                        starSize={width * 0.06}
                        color={colors.mainColor}
                    />
                    <Txt
                        size={14}
                        fontWeight={'600'}
                        marginTop={5}
                        textDecorationLine={'line-through'}
                    >
                        {item.price.toLocaleString('en-US')} đ
                    </Txt>

                    <Box row marginTop={5}
                        alignCenter
                    >
                        <Box backgroundColor={colors.redDiscount} padding={5} radius={5}>
                            <Txt
                                size={14}
                                fontFamily={fonts.MAINB}
                                color={colors.white}
                            >
                                -{item.discount}%
                            </Txt>
                        </Box>
                        <Txt
                            color={colors.redDiscount}
                            size={14}
                            fontFamily={fonts.MAINB}
                            marginLeft={5}
                        >
                            {Math.floor(item.price * (1 - item.discount / 100)).toLocaleString('en-US')} đ
                        </Txt>
                    </Box>
                </Box>
            </Btn>
        </>
    )
}

export default Item
import React, { useRef } from 'react'
import Box from '@common/Box'
import Input from '@common/Input'
import Img from '@common/Img'
import Btn from '@common/Btn'
import { fonts } from '@themes/fonts'
import { fillProfileSchema } from './Validation/formValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { useAppSelector } from '@hooks/redux';
import { themeUserSelector } from '@redux/selector/appSelector';
import { useTranslation } from 'react-i18next';
import Txt from '@common/Txt';
import { colors } from '@themes/colors';
import { useTheme } from '@hooks/redux'
import PhoneInput from "react-native-phone-number-input";
import { SelectList } from 'react-native-dropdown-select-list'
import * as ImagePicker from 'react-native-image-picker';
import { ActivityIndicator } from 'react-native'
import { width, height } from '@utils/responsive'

const Form = () => {
    const { t } = useTranslation();
    const theme = useAppSelector(themeUserSelector);
    const color = useTheme()
    const { handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(fillProfileSchema)
    });
    const handleContinue = () => {
        console.log('Continue')
    }
    const [phone, setPhone] = React.useState('')
    const [loading, setLoading] = React.useState(false);
    const [selectedGender, setSelectedGender] = React.useState('');
    const [selectedImage, setSelectedImage] = React.useState('');
    const [email, setEmail] = React.useState('');
    const gender = [
        { key: '1', value: t('Male') },
        { key: '2', value: t('Female') },
        { key: '3', value: t('Other') },
    ]
    const handleChoosePhoto = () => {
        setLoading(true);
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {
                setLoading(false);
                if (response.didCancel) {
                } else if (response.errorCode) {
                } else {
                    const source = { uri: response?.assets?.[0]?.uri ?? 'Anh bi null' };
                    setSelectedImage(source.uri);
                }
            },
        );
    }

    const fullNameRef = useRef<any>(null);
    const nickNameRef = useRef<any>(null);
    const emailRef = useRef<any>(null);
    const phoneRef = useRef<any>(null);

    return (
        <Box marginVertical={50}>
            <Box>
                <Img
                    source={selectedImage ? { uri: selectedImage } : require('@images/unAuth/user.png')}
                    alignSelf={'center'}
                    width={width * 0.3}
                    height={height * 0.15}
                    radius={width * 0.5 / 2}
                />
                {loading ? (
                    <ActivityIndicator
                        size="small"
                        color={colors.mainColor}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            marginRight: width * 0.28
                        }}
                    />
                ) : (
                    <Btn onPress={handleChoosePhoto}>
                        <Img
                            source={require('@images/unAuth/edit.png')}
                            absolute
                            bottom={0}
                            right={0}
                            radius={width * 0.5 / 2}
                            width={32}
                            height={32}
                            style={{
                                marginRight: width * 0.28
                            }}
                        />
                    </Btn>
                )}

            </Box>
            <Box marginTop={height * 0.04}>
                <Input
                    backgroundColor={color.black3}
                    radius={width * 0.04}
                    height={height * 0.07}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Full name'}
                    font={fonts.MAIN}
                    hintColor={'#888888'}
                    onChangeText={(text: string) => setValue('fullName', text)}
                    color={theme === 'light' ? color.black : color.white}
                    returnKeyType='next'
                    onSubmitEditing={() => nickNameRef.current?.focus()}
                    ref={fullNameRef}
                />
                {errors.fullName && <Txt color={'red'} size={14} marginTop={height * 0.01}>{errors.fullName?.message}</Txt>}
                <Input
                    backgroundColor={color.black3}
                    radius={width * 0.05}
                    height={height * 0.07}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Nickname'}
                    hintColor={'#888888'}
                    marginTop={height * 0.03}
                    font={fonts.MAIN}
                    onChangeText={(text: string) => setValue('nickName', text)}
                    color={theme === 'light' ? color.black : color.white}
                    returnKeyType='next'
                    onSubmitEditing={() => emailRef.current?.focus()}
                    ref={nickNameRef}
                />
                {errors.nickName && <Txt color={'red'} size={14} marginTop={height * 0.01}>{errors.nickName?.message}</Txt>}
                <Input
                    backgroundColor={color.black3}
                    radius={width * 0.04}
                    height={height * 0.07}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Email'}
                    hintColor={'#888888'}
                    marginTop={height * 0.03}
                    font={fonts.MAIN}
                    iconTwo={require('@images/unAuth/mail.png')}
                    sizeIcon={18}
                    onChangeText={(text: string) => {
                        setValue('email', text);
                        setEmail(text);
                    }}
                    color={theme === 'light' ? color.black : color.white}
                    tintColor={
                        theme === 'light' && email.length > 0 ? color.black :
                            theme === 'dark' && email.length > 0 ? color.white :
                                theme === 'light' ? color.tintLight : color.tintLight
                    }
                    returnKeyType='next'
                    keyboardType='email-address'
                    onSubmitEditing={() => phoneRef.current?.focus()}
                    ref={emailRef}
                />
                {errors.email && <Txt color={'red'} size={14} marginTop={height * 0.01}>{errors.email?.message}</Txt>}
                <PhoneInput
                    defaultCode="VN"
                    layout="first"
                    onChangeText={(text: string) => {
                        setValue('phoneNumber', text);
                        setPhone(text);
                    }}
                    value={phone}
                    containerStyle={{
                        backgroundColor: theme === 'light' ? color.black3 : color.black3,
                        borderRadius: width * 0.04,
                        width: '100%',
                        borderWidth: 1,
                        marginTop: height * 0.03,
                        borderColor: theme === 'light' ? color.black3 : color.black3,
                        height: height * 0.07,
                    }}
                    textInputStyle={{
                        color: theme === 'light' ? color.black : color.black,
                        fontFamily: fonts.MAIN,
                        paddingVertical: 0
                    }}
                    textContainerStyle={{
                        backgroundColor: theme === 'light' ? color.black3 : color.black3,
                        height: height * 0.07,
                        borderRadius: width * 0.04,
                    }}
                    codeTextStyle={{
                        color: theme === 'light' ? color.black : color.black,
                        fontFamily: fonts.MAIN,
                    }}
                    textInputProps={{
                        placeholderTextColor: '#888888',
                    }}
                    disableArrowIcon
                />

                {errors.phoneNumber && <Txt color={'red'} size={14} marginTop={height * 0.01}>{errors.phoneNumber?.message}</Txt>}
                <SelectList
                    data={gender}
                    setSelected={(selectedItem: any) => {
                        setSelectedGender(selectedItem)
                        setValue('gender', selectedItem)
                    }}
                    placeholder='Choose gender'
                    fontFamily={fonts.MAIN}
                    boxStyles={{
                        marginTop: height * 0.03, borderWidth: 0,
                        backgroundColor: theme === 'light' ? color.black3 : color.black3,
                        height: height * 0.07, borderRadius: width * 0.04, borderColor: theme === 'light' ? color.black3 : color.black3,
                    }}
                    inputStyles={{
                        color: theme === 'light' ? color.black : color.white,
                        alignSelf: 'center',
                    }}
                    dropdownTextStyles={{
                        color: theme === 'light' ? color.black : color.white,
                    }}
                    search={false}
                    arrowicon={theme === 'light' ?
                        <Img
                            source={require('@images/unAuth/down_black.png')}
                            width={width * 0.03}
                            height={height * 0.015}
                            style={{
                                alignSelf: 'center'
                            }}
                        />
                        :
                        <Img
                            source={require('@images/unAuth/down_white.png')}
                            width={width * 0.03}
                            height={height * 0.015}
                            style={{
                                alignSelf: 'center'
                            }}
                        />}
                />
                {errors.gender && <Txt color={'red'} size={14} marginTop={height * 0.01}>{errors.gender?.message}</Txt>}
            </Box>
            <Box marginTop={height * 0.1}>
                <Box row justifyCenter style={{ justifyContent: 'space-between' }}>
                    <Btn
                        width={'48%'}
                        padding={width * 0.04}
                        radius={width * 0.08}
                        backgroundColor={theme === 'light' ? colors.lMainColor2 : colors.black3}
                        onPress={() => {
                            console.log('Skip')
                        }}
                    >
                        <Txt
                            color={theme === 'light' ? colors.mainColor : colors.white}
                            size={14}
                            fontWeight={'bold'}
                            fontFamily={fonts.MAIN}
                        >
                            {t('Skip')}
                        </Txt>
                    </Btn>
                    <Btn
                        width={'48%'}
                        radius={width * 0.08}
                        backgroundColor={colors.mainColor}
                        shadow
                        shadowColor={'#41ab67'}
                        elevation={5}
                        onPress={handleSubmit(handleContinue)}
                    >
                        <Txt
                            color={colors.white}
                            size={14}
                            fontWeight={'bold'}
                            fontFamily={fonts.MAIN}
                        >
                            {t('Continue')}
                        </Txt>
                    </Btn>
                </Box>
            </Box>
        </Box>
    )
}

export default React.memo(Form)

import React from 'react'
import Header from './Header'
import Form from './Form'
import { useTheme } from '@hooks/redux'
import Scroll from '@common/Scroll'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { width, height } from '@utils/responsive'

const FillProfile = () => {
  const theme = useTheme()
  return (
    <KeyBoardSafe
      extraRollHeight={50}
    >
      <Scroll
        flex={1}
        paddingHorizontal={width * 0.05}
        paddingVertical={height * 0.01}
        backgroundColor={theme.bg}
      >
        <Header />
        <Form />
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(FillProfile)

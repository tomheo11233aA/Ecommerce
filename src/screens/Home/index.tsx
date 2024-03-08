import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Scroll from '@common/Scroll'
import { useTranslation } from 'react-i18next'
import { checkTime } from '@utils/checkTime'
import { width, height } from '@utils/responsive'
import { useTheme } from '@hooks/redux'
import Header from './Header'
import Search from './Search'
import { FlatList } from 'react-native'
import Item from './Item'
import { fakeDataOutStanding } from '@utils/fakeData'
import HomeLoading from '@common/Sketeton/HomeLoading'
import Title from './Title'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'

const Home = () => {
  const { t } = useTranslation()
  const time = checkTime()
  const color = useTheme()
  const [fakeLoading, setFakeLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFakeLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  if (fakeLoading) {
    return (
      <KeyBoardSafe>
        <HomeLoading />
      </KeyBoardSafe>
    )
  }


  return (
    <KeyBoardSafe>
      <Scroll
        paddingHorizontal={width * 0.05}
        marginTop={height * 0.01}
        marginBottom={BOTTOM_TAB_HEIGHT}
      >
        <Header
          t={t}
          time={time}
          color={color}
        />
        <Search
          t={t}
          height={height}
          width={width}
          color={color}
        />

        <Title t={t} title='Outstanding Products'
          onPress={() => {
            console.log('See All For Outstanding Products')
          }}
        />
        <FlatList
          data={fakeDataOutStanding}
          renderItem={({ item }) => (
            <Item item={item} numberOfLines={1} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Title t={t} title='Outstanding Products'
          onPress={() => {
            console.log('See All For Outstanding Products')
          }}
        />
        <FlatList
          data={fakeDataOutStanding}
          renderItem={({ item }) => (
            <Item item={item} numberOfLines={1} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Title t={t} title='Outstanding Products'
          onPress={() => {
            console.log('See All For Outstanding Products')
          }}
        />
        <FlatList
          data={fakeDataOutStanding}
          renderItem={({ item }) => (
            <Item item={item} numberOfLines={1} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(Home)



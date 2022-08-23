import React, { FunctionComponent, useCallback, useMemo } from 'react'
import { useTheme } from '../../design'
import Icon from 'react-native-vector-icons/Feather'
import { Button, Screen } from '../../shared'
import { Challenge, ChallengeCard } from '../../challenge'
import Carousel from 'react-native-snap-carousel'
import { useMyChallenges } from '../../challenge/hooks'
import { StyleSheet, useWindowDimensions, ViewStyle } from 'react-native'

export const HomeScreen: FunctionComponent = () => {
  const theme = useTheme()
  const myChallenges = useMyChallenges()
  const screenWidth = useWindowDimensions().width

  const addNew = useCallback(() => {}, [])

  const renderItem = useCallback(
    ({ item }: { item: Challenge }) => <ChallengeCard challenge={item} />,
    [],
  )

  const carouselData: Challenge[] = useMemo(
    () => [{ name: 'My challenges' } as Challenge, ...myChallenges],
    [myChallenges],
  )

  return (
    <Screen
      title="Challenges"
      headerRight={
        <Button
          onPress={addNew}
          left={
            <Icon name="plus-circle" color={theme.colors.onPrimary} size={25} />
          }>
          New
        </Button>
      }>
      <Carousel<Challenge>
        contentContainerCustomStyle={styles.carousel}
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 80}
        vertical={false}
      />
    </Screen>
  )
}

const styles = StyleSheet.create<{
  carousel: ViewStyle
}>({
  carousel: {
    marginTop: 20,
  },
})

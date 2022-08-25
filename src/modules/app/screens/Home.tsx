import React, { FunctionComponent, useCallback, useMemo, useState } from 'react'
import { useTheme } from '../../design'
import Icon from 'react-native-vector-icons/Feather'
import { Button, Screen } from '../../shared'
import { Challenge, ChallengeCard } from '../../challenge'
import Carousel from 'react-native-snap-carousel'
import { useMyChallenges } from '../../challenge/hooks'
import {
  FlatList,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
} from 'react-native'
import {
  ChallengeUpdate,
  ChallengeUpdateCard,
  useMyChallengesNews,
  useNewsByChallengeId,
} from '../../news'

export const HomeScreen: FunctionComponent = () => {
  const theme = useTheme()
  const myChallenges = useMyChallenges()
  const screenWidth = useWindowDimensions().width
  const [challenge, setChallenge] = useState<Challenge | undefined>()

  const userNews = useMyChallengesNews()
  const challengeNews = useNewsByChallengeId(challenge?.id)

  const addNew = useCallback(() => {}, [])

  const renderChallengeItem = useCallback(
    ({ item }: { item: Challenge }) => (
      <ChallengeCard
        hideDescription
        challenge={item}
        hideFooter={item.id === '__all_mine__'}
      />
    ),
    [],
  )

  const challengeChanged = useCallback(
    (index: number) => {
      setChallenge(myChallenges[index - 1])
    },
    [myChallenges],
  )

  const renderChallengeUpdateItem = useCallback(
    ({ item }: { item: ChallengeUpdate }) => (
      <ChallengeUpdateCard
        style={styles.update}
        challengeUpdate={item}
        hideChallenge={Boolean(challenge)}
      />
    ),
    [challenge],
  )

  const carouselData: Challenge[] = useMemo(
    () => [
      { id: '__all_mine__', name: 'All my challenges' } as Challenge,
      ...myChallenges,
    ],
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
      <FlatList<ChallengeUpdate>
        data={challenge ? challengeNews : userNews}
        contentContainerStyle={styles.list}
        renderItem={renderChallengeUpdateItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Carousel<Challenge>
            containerCustomStyle={styles.carousel}
            slideStyle={styles.carouselItem}
            data={carouselData}
            renderItem={renderChallengeItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth - 70}
            vertical={false}
            inactiveSlideScale={1}
            onSnapToItem={challengeChanged}
          />
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create<{
  carousel: ViewStyle
  carouselItem: ViewStyle
  update: ViewStyle
  list: ViewStyle
}>({
  carousel: {
    marginTop: 20,
    marginBottom: 10,
  },
  carouselItem: {
    paddingHorizontal: 10,
  },
  update: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  list: {
    paddingBottom: 20,
  },
})

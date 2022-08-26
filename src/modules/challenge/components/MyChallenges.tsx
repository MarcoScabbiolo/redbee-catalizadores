import React, { FunctionComponent, useCallback } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import { Screen } from '../../shared'
import { Challenge } from '../domain'
import { useMyChallenges } from '../hooks'
import { ChallengeCard } from './ChallengeCard'

export const MyChallengesScreen: FunctionComponent = () => {
  const challenges = useMyChallenges()

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Challenge>) => (
      <ChallengeCard style={styles.challenge} challenge={item} />
    ),
    [],
  )

  return (
    <Screen title="All My Challenges">
      <FlatList<Challenge>
        data={challenges}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </Screen>
  )
}

const styles = StyleSheet.create<{
  list: ViewStyle
  challenge: ViewStyle
}>({
  list: {
    paddingBottom: 20,
  },
  challenge: { marginHorizontal: 20, marginTop: 20 },
})

import React, { FunctionComponent, useCallback } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import { Challenge, ChallengeCard, useNotMyChallenges } from '../../challenge'
import { Screen } from '../../shared'

export const DiscoverScreen: FunctionComponent = () => {
  const challenges = useNotMyChallenges()

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Challenge>) => (
      <ChallengeCard challenge={item} style={styles.challenge} />
    ),
    [],
  )

  return (
    <Screen safeTopPadding>
      <FlatList<Challenge>
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={challenges}
        renderItem={renderItem}
      />
    </Screen>
  )
}

const styles = StyleSheet.create<{
  list: ViewStyle
  challenge: ViewStyle
}>({
  list: { paddingBottom: 20 },
  challenge: {
    marginHorizontal: 20,
    marginTop: 20,
  },
})

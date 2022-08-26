import React, { FunctionComponent } from 'react'
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { Card, Text } from '../../shared'
import { ChallengeUpdate } from '../domain'

export interface ChallengeUpdateCardProps {
  challengeUpdate: ChallengeUpdate
  style?: StyleProp<ViewStyle>
  hideChallenge?: boolean
  onPressChallenge?: () => void
}

export const ChallengeUpdateCard: FunctionComponent<
  ChallengeUpdateCardProps
> = ({ challengeUpdate, style, hideChallenge = false, onPressChallenge }) => {
  return (
    <Card style={style}>
      <View style={styles.header}>
        <Text style={styles.username}>{challengeUpdate.by.name}</Text>
        {hideChallenge ? undefined : (
          <Text style={styles.challenge} onPress={onPressChallenge}>
            {challengeUpdate.challengeName}
          </Text>
        )}
      </View>
      <Text style={styles.content}>{challengeUpdate.description}</Text>
    </Card>
  )
}

const styles = StyleSheet.create<{
  header: ViewStyle
  username: TextStyle
  challenge: TextStyle
  content: TextStyle
}>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  username: { fontSize: 14 },
  challenge: { fontSize: 14 },
  content: {
    fontSize: 16,
  },
})

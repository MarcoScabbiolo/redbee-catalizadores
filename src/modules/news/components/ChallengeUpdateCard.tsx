import React, { FunctionComponent } from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'
import { Card } from '../../shared'
import { ChallengeUpdate } from '../domain'

export interface ChallengeUpdateCardProps {
  challengeUpdate: ChallengeUpdate
  style?: StyleProp<ViewStyle>
}

export const ChallengeUpdateCard: FunctionComponent<
  ChallengeUpdateCardProps
> = ({ challengeUpdate, style }) => {
  return (
    <Card style={style}>
      <Text>{challengeUpdate.by.id}</Text>
      <Text>{challengeUpdate.description}</Text>
      <Text>{challengeUpdate.challengeName}</Text>
    </Card>
  )
}

import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'
import { Card } from '../../shared'
import { ChallengeUpdate } from '../domain'

export interface ChallengeUpdateCardProps {
  challengeUpdate: ChallengeUpdate
}

export const ChallengeUpdateCard: FunctionComponent<
  ChallengeUpdateCardProps
> = ({ challengeUpdate }) => {
  return (
    <Card>
      <Text>{challengeUpdate.by.id}</Text>
      <Text>{challengeUpdate.description}</Text>
      <Text>{challengeUpdate.challengeName}</Text>
    </Card>
  )
}

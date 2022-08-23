import React, { FunctionComponent, useCallback } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useTheme } from '../../design'
import { Card } from '../../shared'
import { Challenge, challengeStatusLabel } from '../domain/Challenge'

export interface ProjectCardProps {
  challenge: Challenge
  style?: StyleProp<ViewStyle>
  navigate?: boolean
}

export const ChallengeCard: FunctionComponent<ProjectCardProps> = ({
  challenge,
  style,
  navigate = false,
}) => {
  const theme = useTheme()

  const navigateToChallenge = useCallback(() => {}, [])

  return (
    <Card onPress={navigate ? navigateToChallenge : undefined} style={style}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {challenge.name}
        </Text>
        <Icon
          style={styles.icon}
          name="chevron-right"
          color={theme.colors.primary}
          size={20}
        />
      </View>
      <Text style={[styles.description, { color: theme.colors.text }]}>
        {challenge.description}
      </Text>
      <Text style={[styles.status, { color: theme.colors.text }]}>
        {challengeStatusLabel(challenge.status)}
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create<{
  header: ViewStyle
  icon: ViewStyle
  title: TextStyle
  description: TextStyle
  status: TextStyle
}>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    position: 'relative',
    top: -5,
  },
  description: {
    marginBottom: 15,
  },
  status: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
})

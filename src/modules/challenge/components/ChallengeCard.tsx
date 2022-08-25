import React, { FunctionComponent, useCallback } from 'react'
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from '../../design'
import {
  useChallengeVotes,
  useMyVoteInChallenge,
  useSolutionProposalCountByChallengeId,
} from '../../news'
import { Card, Text } from '../../shared'
import { useCurrentUser } from '../../user'
import { Challenge, ChallengeStatus, challengeStatusLabel } from '../domain'

export interface ProjectCardProps {
  challenge: Challenge
  style?: StyleProp<ViewStyle>
  navigate?: boolean
  hideDescription?: boolean
  hideFooter?: boolean
}

export const ChallengeCard: FunctionComponent<ProjectCardProps> = ({
  challenge,
  style,
  navigate = false,
  hideDescription = false,
  hideFooter = false,
}) => {
  const theme = useTheme()
  const me = useCurrentUser()
  const votes = useChallengeVotes(challenge.id)
  const [voted, vote] = useMyVoteInChallenge(challenge)
  const cantVote = challenge?.owners?.includes(me.id)
  const solutionProposalCount = useSolutionProposalCountByChallengeId(
    challenge.id,
  )

  const navigateToChallenge = useCallback(() => {}, [])

  return (
    <Card onPress={navigate ? navigateToChallenge : undefined} style={style}>
      <View style={styles.header}>
        <Text style={styles.title}>{challenge.name}</Text>
        <Icon
          style={styles.icon}
          name="chevron-right"
          color={theme.colors.primary}
          size={20}
        />
      </View>
      {hideDescription ? undefined : (
        <Text style={styles.description}>{challenge.description}</Text>
      )}
      {hideFooter ? undefined : (
        <View style={styles.footer}>
          <View style={styles.footerIcons}>
            <TouchableOpacity
              disabled={cantVote}
              onPress={vote}
              style={styles.voteContainer}>
              <FAIcon
                name={cantVote || voted ? 'heart' : 'heart-o'}
                size={20}
                color="#ffb3ab"
              />
              <Text style={styles.voteCount}>{votes}</Text>
            </TouchableOpacity>
            {challenge.status === ChallengeStatus.Announcement ? (
              <View style={styles.voteContainer}>
                <FAIcon name="file-text" color="#AAA" size={20} />
                <Text style={styles.voteCount}>{solutionProposalCount}</Text>
              </View>
            ) : undefined}
          </View>
          <Text style={styles.status}>
            {challengeStatusLabel(challenge.status)}
          </Text>
        </View>
      )}
    </Card>
  )
}

const styles = StyleSheet.create<{
  header: ViewStyle
  icon: ViewStyle
  title: TextStyle
  description: TextStyle
  footer: ViewStyle
  footerIcons: ViewStyle
  voteContainer: ViewStyle
  voteCount: TextStyle
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
    fontSize: 15,
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  voteCount: {
    fontSize: 18,
    marginLeft: 4,
  },
  footerIcons: {
    flexDirection: 'row',
  },
})

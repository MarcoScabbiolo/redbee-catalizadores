import React, { FunctionComponent, PropsWithChildren } from 'react'
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import { useTheme } from '../../design'

export interface CardProps {
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export const Card: FunctionComponent<PropsWithChildren<CardProps>> = ({
  children,
  onPress,
  style,
}) => {
  const theme = useTheme()

  const containerProps: ViewProps = {
    style: [
      styles.container,
      {
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadius,
      },
      style,
    ],
  }

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} {...containerProps}>
        {children}
      </TouchableOpacity>
    )
  }

  return <View {...containerProps}>{children}</View>
}

const styles = StyleSheet.create<{
  container: ViewStyle
}>({
  container: {
    padding: 10,
  },
})

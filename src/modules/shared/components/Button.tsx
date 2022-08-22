import React, { FunctionComponent, ReactNode } from 'react'
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import { useTheme } from '../../design'

export interface ButtonProps {
  children: ReactNode
  onPress: () => void
  disabled?: boolean
  left?: ReactNode
  right?: ReactNode
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onPress,
  disabled = false,
  left,
  right,
}) => {
  const theme = useTheme()

  let content: ReactNode

  if (typeof children === 'string') {
    content = (
      <Text style={[styles.text, { color: theme.colors.onPrimary }]}>
        {children}
      </Text>
    )
  } else {
    content = children
  }

  content = (
    <>
      {left}
      {content}
      {right}
    </>
  )

  const containerProps: ViewProps = {
    style: [
      styles.container,
      {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius,
      },
    ],
  }

  if (disabled) {
    return <View {...containerProps}>{content}</View>
  } else {
    return (
      <TouchableOpacity onPress={onPress} {...containerProps}>
        {content}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create<{
  container: ViewStyle
  text: TextStyle
}>({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { marginHorizontal: 10, fontSize: 16 },
})

import React, { FunctionComponent, useMemo } from 'react'
import { StyleProp, Text as RNText, TextProps, TextStyle } from 'react-native'
import { useTheme } from '../../design'

export const Text: FunctionComponent<TextProps> = ({
  style,
  children,
  onPress,
  ...props
}) => {
  const theme = useTheme()
  const textStyles = useMemo(() => {
    const styles: StyleProp<TextStyle>[] = [{ color: theme.colors.text }]

    if (onPress) {
      styles.push({
        fontWeight: 'bold',
      })
    }

    styles.push(style)
    return styles
  }, [onPress, style, theme.colors.text])

  return (
    <RNText {...props} style={textStyles} onPress={onPress}>
      {children}
    </RNText>
  )
}

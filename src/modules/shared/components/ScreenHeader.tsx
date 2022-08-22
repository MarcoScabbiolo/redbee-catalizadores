import React, { FunctionComponent, PropsWithChildren } from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { useTheme } from '../../design'

export interface ScreenHeaderProps {
  title: string
}

export const ScreenHeader: FunctionComponent<
  PropsWithChildren<ScreenHeaderProps>
> = ({ title, children }) => {
  const theme = useTheme()

  return (
    <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      <View style={styles.right}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create<{
  header: ViewStyle
  title: TextStyle
  right: ViewStyle
}>({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  right: {
    alignItems: 'center',
  },
})

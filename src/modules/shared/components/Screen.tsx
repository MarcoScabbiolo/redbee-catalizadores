import { useNavigation } from '@react-navigation/native'
import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
} from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useErrorService } from '../../error'
import { ErrorBoundary } from './ErrorBoundary'
import { ScreenHeader } from './ScreenHeader'

export interface ScreenProps {
  title?: string
  headerRight?: ReactNode
  style?: StyleProp<ViewStyle>
  safeTopPadding?: boolean
}

export const Screen: FunctionComponent<PropsWithChildren<ScreenProps>> = ({
  children,
  title,
  headerRight,
  style,
  safeTopPadding = false,
}) => {
  const errorService = useErrorService()
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const onError = useCallback(
    (error: Error) => {
      errorService.screenError(error)
      navigation.goBack()
    },
    [errorService, navigation],
  )

  const header = title ? (
    <ScreenHeader title={title}>{headerRight}</ScreenHeader>
  ) : undefined

  const screenStyles: StyleProp<ViewStyle> = useMemo(() => {
    const result: StyleProp<ViewStyle> = [styles.screen]

    if (safeTopPadding) {
      result.push({ paddingTop: insets.top })
    }

    result.push(style)

    return result
  }, [insets.top, safeTopPadding, style])

  return (
    <ErrorBoundary onError={onError}>
      <View style={screenStyles}>
        {header}
        {children}
      </View>
    </ErrorBoundary>
  )
}

const styles = StyleSheet.create<{
  screen: ViewStyle
}>({
  screen: { flex: 1 },
})

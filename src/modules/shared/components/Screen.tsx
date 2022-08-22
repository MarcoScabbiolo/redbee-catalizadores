import { useNavigation } from '@react-navigation/native'
import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useCallback,
} from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../design'
import { useErrorService } from '../../error'
import { ErrorBoundary } from './ErrorBoundary'
import { ScreenHeader } from './ScreenHeader'

export interface ScreenProps {
  safe?: boolean
  title?: string
  headerRight?: ReactNode
  style?: StyleProp<ViewStyle>
}

export const Screen: FunctionComponent<PropsWithChildren<ScreenProps>> = ({
  children,
  title,
  headerRight,
  style,
  safe = true,
}) => {
  const errorService = useErrorService()
  const navigation = useNavigation()
  const theme = useTheme()

  const onError = useCallback(
    (error: Error) => {
      errorService.screenError(error)
      navigation.goBack()
    },
    [errorService, navigation],
  )

  if (title) {
    children = (
      <>
        <ScreenHeader title={title}>{headerRight}</ScreenHeader>
        {children}
      </>
    )
  }

  if (safe) {
    children = (
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    )
  }

  return <ErrorBoundary onError={onError}>{children}</ErrorBoundary>
}

const styles = StyleSheet.create<{
  screen: ViewStyle
}>({
  screen: { flex: 1 },
})

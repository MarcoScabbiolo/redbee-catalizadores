import { useContext } from 'react'
import { ThemeContext } from '../context'
import { Theme } from '../domain'

export const useTheme = (): Theme => {
  const service = useContext(ThemeContext)

  if (!service) {
    throw new Error('No ThemeContext')
  }

  return service.theme
}

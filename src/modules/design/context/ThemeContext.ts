import { createContext } from 'react'
import { ThemeService } from '../services'

export const ThemeContext = createContext<ThemeService | undefined>(undefined)

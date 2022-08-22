import { createContext } from 'react'
import { ErrorService } from '../services'

export const ErrorContext = createContext<ErrorService | undefined>(undefined)

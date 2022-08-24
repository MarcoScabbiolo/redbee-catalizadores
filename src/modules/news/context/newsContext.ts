import { createContext } from 'react'
import { NewsRepository } from '../services'

export const NewsContext = createContext<NewsRepository | undefined>(undefined)

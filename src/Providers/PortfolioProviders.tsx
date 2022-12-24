import { useContext, useReducer, createContext } from 'react'
import PortfolioReducer from './PortfolioReducer'
import { portfolioData } from '../../data'
import { portfolioDataType } from '../type'

type PortfolioContextProviderProps = {
  children: React.ReactNode
}


const PortfolioContext = createContext<portfolioDataType | null>(null)
const PortfolioContextDispatcher = createContext<any | null>(null)

const PortfolioProvider = ({ children }: PortfolioContextProviderProps) => {
  const [portfolio, dispatch] = useReducer(PortfolioReducer, portfolioData)

  return (
    <PortfolioContext.Provider value={portfolio}>
      <PortfolioContextDispatcher.Provider value={dispatch}>
        {children}
      </PortfolioContextDispatcher.Provider>
    </PortfolioContext.Provider>
  )
}

export default PortfolioProvider

export const usePortfolio = () => useContext(PortfolioContext)
export const usePortfolioAction = () => useContext(PortfolioContextDispatcher)

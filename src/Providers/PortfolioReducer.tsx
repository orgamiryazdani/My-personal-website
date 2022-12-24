import { portfolioData } from '../../data'
import { portfolioDataType } from '../type'

type UpdateAction = {
  type: 'SEARCH'
  payload: string
}

const searchPortfolio = (state: portfolioDataType, payload: string) => {
  if (payload == '') {
    return portfolioData
  } else {
    const portfolioSearch = portfolioData.filter((item) =>
      item.title.toLowerCase().includes(payload.toLowerCase())
    )
    return portfolioSearch
  }
}

const portfolioReducer = (state: portfolioDataType, action: UpdateAction) => {
  switch (action.type) {
    case 'SEARCH':
      return searchPortfolio(state, action.payload)
    default:
      return state
  }
}

export default portfolioReducer

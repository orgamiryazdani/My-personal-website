import { usePortfolioAction } from '../Providers/PortfolioProviders'

const Search = () => {
  
  const handleClick = () => {
    const getDiv = document.getElementById('scrollDiv') as HTMLElement
    getDiv.scrollTo(0, 720)
  }
  const dispatch = usePortfolioAction()

  const searchHandler = (e: any) => {
    dispatch({ type: 'SEARCH', payload: e.target.value })
  }

  return (
    <input
      className="p-2 rounded-lg bg-[#4b4b4b] text-white md:w-full w-3/4"
      placeholder="Search on portfolio"
      type="search"
      onChange={(e) => searchHandler(e)}
      onClick={handleClick}
    />
  )
}

export default Search

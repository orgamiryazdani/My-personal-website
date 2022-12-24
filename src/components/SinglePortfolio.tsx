import { useParams } from 'react-router-dom'
import { portfolioData } from '../../data'

type portfolioDataType = {
  id: number 
  title: string
  img: any
  ApplicationFramework: string
  FrameworkStyles: string
  description: string
  allLibraryAndFramework: string[]
  linkLiveApp: string
  linkGithub: string
}

const SinglePortfolio = () => {
  const { id } = useParams()
  const portfolio = portfolioData.filter((s:portfolioDataType) => s.id === Number(id))

  return (
    <div className="text-black w-full bg-yellow-500 h-auto min-h-full flex">
      {portfolio.map((item) => (
        <div key={item.id} className="flex flex-wrap w-full  h-full">
          <div className="lg:w-[60%] min-w-[300px] w-full lg:h-screen min-h-[400px] px-4 flex flex-col bg-yellow-500 items-start justify-center">
            <p className="text-4xl fontfamily mb-8 ml-3">{item.title}</p>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="lg:w-[40%] bg-black w-full text-white">
            <p className="lg:text-3xl text-xl text-white w-full h-14 flex items-end justify-center text-center">
              library and framework in App
            </p>
            <div className="flex w-full items-start justify-start flex-wrap h-auto">
              {item.allLibraryAndFramework.map((items) => (
                <div key={items} className="w-26 mt-10 flex m-3 items-center justify-center h-12 p-5 bg-white rounded-lg text-black">
                  {items}
                </div>
              ))}
            </div>
            <div className=" mt-5 px-5">
              <p className="text-3xl mb-2">description</p>
              <p>{item.description}</p>
            </div>
            <div className="w-full flex mb-5 items-end justify-start px-5 h-14 lg:text-xl text-sm">
              <p className="mr-6">See the program at :</p>
              <a className="mr-6 text-blue-400" href={item.linkGithub}>
                Github
              </a>
              <a className="text-blue-400" href={item.linkLiveApp}>
                Live App
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SinglePortfolio

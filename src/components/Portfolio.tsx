import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faCss3Alt, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { SiTailwindcss } from 'react-icons/si'
import { usePortfolio } from '../Providers/PortfolioProviders'
import { portfolioDataType } from '../type'

const Portfolio = () => {
  const portfolio: portfolioDataType = usePortfolio()
  return (
    <div className="w-full h-auto text-white flex items-start justify-center flex-col">
      <p className=" w-full mt-8 md:text-left text-center md:ml-[113px] text-5xl">
        PORTFOLIO
      </p>
      <div className="w-full mt-10 flex justify-evenly items-start flex-wrap p-9 h-full">
        {portfolio.map((item) => (
          <NavLink key={item.id} className="z-10" to={`/singlePortfolio/${item.id}`}>
            <div className="w-80 relative rounded-xl flex items-center justify-start overflow-hidden mb-10 flex-col bg-[#282828] h-64">
              <img className="w-full h-[80%]" src={item.img} alt={item.title} />

              <div className="w-full h-10 text-black text-2xl flex justify-around items-center bottom-[50px] bgPortfolioItem absolute">
                <div className="flex items-center justify-center">
                  {item.ApplicationFramework === 'react' ? (
                    <FontAwesomeIcon icon={faReact} />
                  ) : (
                    ''
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {item.FrameworkStyles === 'css' ? (
                    <FontAwesomeIcon icon={faCss3Alt} />
                  ) : item.FrameworkStyles === 'scss' ? (
                    <FontAwesomeIcon icon={faSass} />
                  ) : item.FrameworkStyles === 'tailwind' ? (
                    <SiTailwindcss />
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div className="w-full h-[20%] flex justify-around items-center">
                <p>{item.title}</p>
                <p className="flex items-center justify-center">
                  Click To View
                  <FontAwesomeIcon
                    className="pl-1"
                    icon={faAnglesRight}
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Portfolio

import menuSvg1 from '../assets/img/menuIcon1.svg'
import menuSvg2 from '../assets/img/menuIcon2.svg'
import menuSvg3 from '../assets/img/menuIcon3.svg'
import { useState } from 'react'
import { menuItem } from '../../data'
import { NavLink } from 'react-router-dom'
import Search from './Search'

type itemMenu = {
  id: number
  title: string
  link: string
}[]
type PortfolioContextProviderProps = {
  test5: React.ReactNode
}
const Menu = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const [menuItemData, setMenuItemData] = useState<itemMenu>(menuItem)

  return (
    <>
      <div className="w-full fixed z-50 top-0 flex md:flex-row-reverse flex-row justify-start h-[10%] md:justify-around">
        <div className="h-16 z-20 w-full md:w-2/4 absolute md:relative flex justify-between md:justify-end pl-2 pr-4 bg-[#171819] items-center ">
          <div
            onClick={() => setMenu(true)}
            className="w-8 md:hidden h-10 cursor-pointer flex flex-col"
          >
            <img src={menuSvg1} alt="vectorMenu" className="w-8 h-8" />
            <img src={menuSvg2} alt="vectorMenu" className="w-8 h-8" />
            <img src={menuSvg3} alt="vectorMenu" className="w-8 h-8" />
          </div>
          <Search />
        </div>
        <div
          className={`duration-400 md:w-2/4 md:h-16 md:bg-[#171819] ml-[-225px] fixed md:relative z-50 transition-all flex h-screen backgroundMenuMobile bg-[#242526] ${
            menu === true ? 'w-56 ml-0' : 'md:ml-0 w-0 ml-[-225px]'
          }`}
        >
          <div
            onClick={() => setMenu(false)}
            className="flex md:hidden justify-center cursor-pointer items-end right-0 absolute z-50 h-10 w-14"
          >
            <img
              src={menuSvg2}
              className="w-8 h-8 rotate-[-45deg]"
              alt="vectorMenu"
            />
            <img
              src={menuSvg3}
              className="w-8 h-8 absolute rotate-[220deg]"
              alt="vectorMenu"
            />
          </div>
          <ul className="w-full h-80 flex bg-[#171819] md:items-center items-start md:h-full flex-col md:flex-row justify-evenly">
            {menuItemData.map((item) => (
              <NavLink key={item.id} to={item.link}>
                <div className="flex  justify-center md:flex-col-reverse items-center">
                  <div className="w-1 h-4 rounded-lg bg-[#FFAE00] md:hidden shadowItemMenu"></div>
                  <li className="flex mt-2 ml-5 justify-start cursor-pointer items-start w-full h-8 text-xl md:text-sm lg:text-xl text-[#FFAE00] md:text-white">
                    {item.title}
                  </li>
                </div>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu

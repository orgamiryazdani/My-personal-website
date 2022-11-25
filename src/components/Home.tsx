import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { productsData } from '../../data'
import homepageVectorDeveloper from '../assets/img/homePageImage.png'
import menu1 from '../assets/img/menuIcon1.svg'
import menu2 from '../assets/img/menuIcon2.svg'
import menu3 from '../assets/img/menuIcon3.svg'

type itemMenu = {
  id: number
  title: string
  link: string
}

const Home = () => {
  const [menuItemData, setMenuItemData]: any = useState(productsData)
  const [menu, setMenu]: any = useState(false)

  return (
    <div className="w-screen h-screen">
      <div className="h-16 w-full flex justify-center items-center ">
        <div
          onClick={() => setMenu(true)}
          className="w-8 h-10 cursor-pointer fixed left-3 flex flex-col"
        >
          <img src={menu1} alt="vectorMenu" className="w-8 h-8" />
          <img src={menu2} alt="vectorMenu" className="w-8 h-8" />
          <img src={menu3} alt="vectorMenu" className="w-8 h-8" />
        </div>
        <p className="text-white font-sans">Amir Yazdani</p>
      </div>

      <div className="text-white flex-col justify-evenly w-full h-28 flex items-center pt-8">
        <p className="text-4xl">HI IAM AMIR</p>
        <p className="text-gray-300">Front End Developer</p>
      </div>

      <div className='w-full flex items-center justify-center mt-8'>
        <button className="button">DOWNLOAD CV</button>
      </div>

      <div className="w-full flex items-center mt-10 justify-center">
        <img src={homepageVectorDeveloper} alt="vectorImageHome" />
      </div>
      <div
        className={`duration-400 ml-[-225px] transition-all flex md:hidden h-screen backgroundMenuMobile bg-[#242526] fixed top-0${
          menu === true ? ' w-56 ml-0' : ' w-0 ml-[-225px]'
        }`}
      >
        <div
          onClick={() => setMenu(false)}
          className="flex justify-center cursor-pointer items-end right-0 absolute z-10 h-10 w-14"
        >
          <img src={menu2} className="w-8 h-8 rotate-[-45deg]" alt="" />
          <img
            src={menu3}
            className="w-8 h-8 absolute rotate-[220deg]"
            alt=""
          />
        </div>
        <ul className="w-full h-80 flex flex-col justify-around">
          {menuItemData.map((item: itemMenu) => (
            <NavLink key={item.id} to={item.link}>
              <div className="flex justify-center items-center">
                <div className="w-1 h-4 rounded-lg bg-[#FFAE00] shadowItemMenu"></div>
                <li className="flex mt-2 ml-5 justify-start cursor-pointer items-start w-full h-8 text-xl text-[#FFAE00]">
                  {item.title}
                </li>
              </div>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home

import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import homepageVectorDeveloper from '../assets/img/homePageImage.png'
import Cv from "../assets/pdf/Amir-Yazdani.pdf"

const Home = () => {
  return (
      <div className="flex w-full h-[90%] mt-16  flex-col">
        <div className="flex md:flex-row flex-col md:h-[90%] w-full">
          <div className="w-full mt-20 flex flex-col md:w-1/2 md:h-full md:mt-0 justify-around md:justify-center items-center h-20">
            <p className="text-4xl lg:text-6xl text-white">HI I,AM AMIR</p>
            <p className="text-gray-400 lg:text-2xl mt-6">Font End Developer</p>
            <div className="w-full flex items-center justify-center mt-16">
              <a href={Cv} className="button" download="Amir-Yazdani-Cv">DOWNLOAD CV</a>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:h-full md:mt-0 flex items-start justify-center mt-32">
            <img
              className="w-80 md:w-[500px] lg:w-[700px]"
              src={homepageVectorDeveloper}
              alt="homePageImage"
            />
          </div>
        </div>
        <div className="w-full text-white md:h-[10%] mt-14 h-24 md:mt-0 text-4xl flex items-center justify-center">
          <FontAwesomeIcon
            className="animationDownIconHomePage"
            icon={faAngleDown}
          ></FontAwesomeIcon>
        </div>
      </div>
  )
}

export default Home

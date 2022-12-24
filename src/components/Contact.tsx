import Layout from '../Layout/Layout'
import locationImage from '../assets/img/location.svg'
import emailImage from '../assets/img/email.svg'
import callImage from '../assets/img/phone.svg'

const Contact = () => {
  return (
    <Layout>
      <div className="w-full h-[70%] md:h-full mt-16 flex items-center justify-center">
        <div className="w-full h-full text-white md:text-4xl">
          <div className="flex items-center justify-start md:pl-40 pl-8 w-full h-[30%]">
            <img src={locationImage} alt="locationImage" className="md:w-44 w-20 mr-10" />
            <p className='fontfamily'>Fars , Shiraz , Iran</p>
          </div>
          <div className="flex items-center md:justify-center w-full justify-start md:pl-0 pl-8 h-[30%]">
            <a href="mailto:orgamiryazdani@gmail.com" className='fontfamily md:ml-4'>org amir yazdani @ gmail.com</a>
            <img src={emailImage} alt="emailImage" className="md:w-44 w-20 ml-10 mr-10" />
          </div>
          <div className="flex items-center justify-start md:pl-40 pl-8 w-full h-[30%]">
            <img src={callImage} alt="callImage" className="md:w-44 w-20 mr-10" />
            <a href='callto:09174510960' className='fontfamily'>09174510960</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

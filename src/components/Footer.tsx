import footerSvg from '../assets/img/footer.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="w-full relative md:mt-28 h-auto">
      <div className="w-full h-auto text-5xl text-white justify-center flex flex-wrap z-50">
        <a className="w-44 h-24 items-start flex justify-center" href="https://github.com/orgamiryazdani">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a className="w-44 h-24 items-start flex justify-center" href="https://www.linkedin.com/in/amir-yazdani-org/">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a className="w-44 h-24 items-start flex justify-center" href="https://t.me/amir2hy">
          <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
        </a>
        <a className="w-44 h-24 items-start flex justify-center" href="mailto:orgamiryazdani@gmail.com">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>
      </div>
      <img src={footerSvg} className=" absolute bottom-0 -z-10" alt="footerSvg" />
      <div className="z-50 bg-[#0099ff] text-center">
        I appreciate you following me
      </div>
    </div>
  )
}

export default Footer

import Layout from '../Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faNpm,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import { SiBabel, SiRedux, SiTailwindcss, SiTypescript, SiWebpack } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const Skills = () => {
  return (
    <Layout>
      <div className="w-full h-auto flex flex-wrap items-start justify-evenly mt-24">
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <FontAwesomeIcon icon={faReact} />
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">React</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Html5</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 3 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Css3</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">JavaScript</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 2 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-lg text-white bg-[#212838] flex items-center justify-center">
              Axios
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Call The Server</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 3 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-xs text-white bg-[#212838] flex items-center justify-center">
              Context
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">context</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <SiRedux />
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Redux</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <SiRedux />
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Redux Toolkit</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <SiTypescript />
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Type Script</p>
            <p className="text-gray-500 text-sm">
              duration of work : I just started and I am doing a project
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <TbBrandReactNative/>
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">React Query</p>
            <p className="text-gray-500 text-sm">
              duration of work : I just started and I am doing a project
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <SiTailwindcss/>
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Tailwind</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <FontAwesomeIcon icon={faSass} />
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Sass</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <SiWebpack/>
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Webpack</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <SiBabel/>
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">Babel</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-sm text-white bg-[#212838] flex items-center justify-center">
              Formik
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">formik library</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-xl text-white bg-[#212838] flex items-center justify-center">
            Yup
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">yup</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
        <div className="w-[350px] mb-8 rounded-2xl flex h-[75px] bgSkill overflow-hidden">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="w-[55px] h-[53px] rounded-[18px] text-3xl text-white bg-[#212838] flex items-center justify-center">
              <FontAwesomeIcon icon={faNpm} />
            </div>
          </div>
          <div className="w-3/4 py-2 text-black h-full flex flex-col items-start justify-evenly">
            <p className="text-xl">npm</p>
            <p className="text-gray-500 text-sm">
              duration of work : More than 1 year
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Skills

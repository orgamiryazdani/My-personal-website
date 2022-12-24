import Layout from '../Layout/Layout'
import img from '../assets/img/aboutGif.gif'

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-wrap text-white w-full h-full">
        <div className="md:w-1/2 w-full flex text-start justify-evenly mt-10 flex-col md:p-8 px-5 md:h-[100%] h-[60%]">
          <p className='md:text-5xl text-3xl'>3 years experience working with html css js</p>
          <p className='md:text-3xl text-2xl text-gray-100'>
            For more than 1 year, I've been working with the react framework and
            I have experience with the redux toolkit, context API, formik, etc.
          </p>
          <p className='md:text-2xl text-xl text-gray-200'>Additionally, I have created websites using these technologies</p>
          <p className='md:text-xl text-lg text-gray-300'>
            In the present I am learning TypeScript, React Query, and other
            tools for web design
          </p>
        </div>
        <div className='md:w-1/2 w-full mt-10 p-5 flex justify-center items-start md:items-center md:h-[100%] h-[35%]'>
          <img
            src={img}
            alt="about image"
            className="rounded-lg"
          />
        </div>
      </div>
    </Layout>
  )
}

export default About

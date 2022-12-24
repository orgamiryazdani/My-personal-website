import Footer from '../components/Footer'
import Menu from '../components/Menu'
import {FC} from 'react';
import { Props } from '../type'; 


const Layout:FC<Props> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  )
}

export default Layout

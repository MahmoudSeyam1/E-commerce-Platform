import React, { ReactElement } from 'react'
import Header from './Header/Header'
import HeaderBottom from './Header/HeaderBottom'
import Footer from './Footer'

interface props {
    children: ReactElement;
}
const RootLayout = ({children}: props) => {
  return (
    <>
        <Header />
        <HeaderBottom />
        {children}
        <Footer />
    </>
  )
}

export default RootLayout

import React from 'react'
import Navbar from '../components/navbar/navbar'
import Translate from '../components/translator/translate'
import Features from '../components/features/feature'
import Participate from '../components/participation/participate'
import Languages from '../components/languages/language'
import Footer from '../components/footer/footer'
import Work from '../components/function/work'
import Prices from '../components/pricing/price'

const Translator = () => {
  return (
    <>
      <Navbar/>
      <Translate/>
      <Features/>
      <Work/>
      <Prices/>
      <Participate/>
      <Languages/>
      <Footer/>
    </>
  )
}

export default Translator

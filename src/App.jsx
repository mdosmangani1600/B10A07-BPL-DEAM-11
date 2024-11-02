
import { useState } from 'react'
import './App.css'
import Footer from './assets/components/footer/footer'
import Header from './assets/components/Header/Header'
import Players from './assets/components/Players/players'

import Banner from './assets/components/banner/Banner'
import Selected from './assets/components/selected/Selected'

function App() {
  const [selected,setSelected] = useState([]);

  const handleAddToSelected = player =>{
    const newSelected = [...selected,player];
    setSelected(newSelected);
  }


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Players handleAddToSelected={handleAddToSelected}></Players>
      <Selected></Selected>
      <Footer></Footer>

    </>
  )
}

export default App

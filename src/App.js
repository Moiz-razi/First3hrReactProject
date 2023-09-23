import React from 'react'
import TopSection from './components/TopSection/TopSection'
import Header from './components/LastHeader/Header'
import Select from './components/Select/Select'
import Lists from './components/Lists/Lists'
import Button from './components/Button/Button'
const App = () => {
  return (
    <div>
     <TopSection/>
     <Select/> <Button/>
     <Header/>
     <Lists/>
      
    </div>
  )
}

export default App

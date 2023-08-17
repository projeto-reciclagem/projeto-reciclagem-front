import './css/styles-default.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './ts/Pages/About'
import Default from './ts/Layout/Default'


const Index = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Default />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter >
  )
}

export default Index

import React from 'react'
import Container from './container'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './component/about'
import Me from './component/me'
import Other from './component/other'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Container/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/me' element={<Me/>} />
          <Route path='/other' element={<Other/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

import React from 'react'
import ArtsLists from './component/artsLists'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './component/main'
import Me from './component/me'
import Other from './component/other'

export default function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route index element={<Main/>} />
          <Route path='/art-lists' element={<ArtsLists/>} />
          <Route path='/me' element={<Me/>} />
          <Route path='/other' element={<Other/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

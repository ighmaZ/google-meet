import React from 'react'
import Home from './Routes/Home'
import Participate from './Routes/Participate'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Participate" element={<Participate />} />
</Routes>
    </>
  )
}

export default App
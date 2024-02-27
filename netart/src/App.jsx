import { useState } from 'react'
import './App.css'
import Pages from './components/Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pages></Pages>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

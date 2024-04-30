import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { NextUIProvider, Divider } from "@nextui-org/react"
import { useNavigate, Routes, Route } from 'react-router-dom'
import useDarkMode from './Hooks/useDarkMode'
import './App.css'
import Loader from './Components/Loader/Loader'
import Home from './Components/Home/Home'
import Committees from './Components/Committees/Committees'

function App() {
  const navigate = useNavigate();
  const [theme, toggleTheme] = useDarkMode()

  return (
    <NextUIProvider navigate={navigate}>
      <main className='text-foreground bg-background'>
        <Routes>
          <Route loader={<Loader />} path='/' element={
            <>
              <Navbar />
              <Home />
            </>
          } />
          <Route loader path='/committees' element={
            <>
              <Navbar />
              <Committees />
            </>} />
          <Route path='/about/smrj' element={<>About</>} />
          <Route path='*' element={<div className='h-[100vh] w-full pt-[10vh] flex justify-center items-center'>
            <Navbar />
            <div className='flex h-10 items-center space-x-4 text-2xl'>
              <div>404</div>
              <Divider orientation='vertical' />
              <div>Page Not Found</div>
            </div>
          </div>} />
        </Routes>
      </main>
    </NextUIProvider>
  )
}

export default App

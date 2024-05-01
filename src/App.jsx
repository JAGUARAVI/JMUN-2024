import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { NextUIProvider, Divider } from "@nextui-org/react"
import { useNavigate, Routes, Route } from 'react-router-dom'
import useDarkMode from './Hooks/useDarkMode'
import './App.css'
import Loader from './Components/Loader/Loader'
import Home from './Components/Home/Home'
import Committees from './Components/Committees/Committees'
import Footer from './Components/Footer/Footer'
import Register from './Components/Register/Register'

const base = import.meta.env.BASE_URL;

function App() {
  const navigate = useNavigate();
  const [theme, toggleTheme] = useDarkMode()

  return (
    <NextUIProvider navigate={navigate}>
      <main className='text-foreground bg-background'>
        <Routes>
          <Route loader={<Loader />} path={base + '/'} element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>} />
          <Route loader path={base + 'committees'} element={
            <>
              <Navbar />
              <Committees />
              <Footer />
            </>}
          />
          <Route loader={<Loader />} path={base + 'register'} element={
            <>
              <Navbar />
              <Register />
              <Footer />
            </>} />
          <Route path='*' element={<div className='h-[100vh] w-full pt-[10vh] flex justify-center items-center'>
            <Navbar />
            <div className='flex h-10 items-center space-x-4 text-4xl'>
              <div>Coming</div>
              <Divider orientation='vertical' />
              <div>Soon</div>
            </div>
          </div>} />
        </Routes>
      </main>
    </NextUIProvider>
  )
}

export default App
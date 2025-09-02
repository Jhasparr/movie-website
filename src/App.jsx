import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MoviesContent from './components/MoviesContent'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen text-white'>
    <Navbar />
    <main>
      <MoviesContent />
      

    </main>
    <Footer />
    <ScrollToTop />
    </div>
      
    </>
  )
}

export default App

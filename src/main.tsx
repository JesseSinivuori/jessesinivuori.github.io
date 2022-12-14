import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Navbar } from './components'
import ContactPage from './ContactPage'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      {/**container + background color */}
      <div className='bg-primary h-full w-full absolute overflow-auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)

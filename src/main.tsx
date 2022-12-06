import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Footer, Navbar } from './components'
import ContactPage from './ContactPage'
import './index.css'
import styles from './style'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden fixed z-[99]">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <Navbar />
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Footer />
        </div>
      </div>
      
    </BrowserRouter>
  </React.StrictMode>
)

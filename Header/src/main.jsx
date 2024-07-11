import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Principal from './Principal.jsx'
import './index.css'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Principal/>
    <Footer/>
  </React.StrictMode>,
)

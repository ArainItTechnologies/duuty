import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <App />
        <Footer />
    </StrictMode>,
)

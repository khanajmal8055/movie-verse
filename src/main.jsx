import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieContext from './context-api/movieContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context-api/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MovieContext>
      <UserContext>
      <App />
      </UserContext>
    </MovieContext>
    
  </BrowserRouter>
 
)

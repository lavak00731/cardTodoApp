import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/AuthProvider.tsx';
import CardsProvider from './components/CardsProvider.tsx';
import App from './App.tsx'
import './index.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <AuthProvider>
            <CardsProvider>
              <App />
            </CardsProvider>
          </AuthProvider>
      </BrowserRouter>    
  </StrictMode>,
)

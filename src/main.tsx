import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LoginPageContextProvider } from './Context/LoginContext.tsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <LoginPageContextProvider>
        <App />
      </LoginPageContextProvider>
    </QueryClientProvider>
    
  </StrictMode>,
)

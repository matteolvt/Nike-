import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
        domain="nikea.eu.auth0.com"
        clientId="ecpZQG5vdtJM2YDxOuQLXS47HGs3RM7d"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>,
  </StrictMode>,
)

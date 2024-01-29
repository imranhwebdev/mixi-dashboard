import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SidebarProvider } from './context/SidebarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <SidebarProvider>
      <App />
    </SidebarProvider>
)

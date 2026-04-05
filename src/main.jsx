import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApplicationRouters from './routers/MyApplicationRouters.jsx'
import { MyContextProvider } from './context/MycontextApplication.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
<MyContextProvider>
<MyApplicationRouters/>
<ToastContainer />
</MyContextProvider>
)

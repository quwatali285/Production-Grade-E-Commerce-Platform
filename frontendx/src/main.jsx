import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import dataContext from "./context/DataContext.jsx";
import { BrowserRouter } from 'react-router-dom'
import DataContext from './context/DataContext.jsx';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DataContext>
            <App/>
        </DataContext>
    </BrowserRouter>

)

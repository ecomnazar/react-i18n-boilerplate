import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './mainPage'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainPage />
    </React.StrictMode>
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CookiesProvider } from 'react-cookie';

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <RouterProvider router={router}/>
    </CookiesProvider>

   
  </StrictMode>,
)

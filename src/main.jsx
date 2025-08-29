import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pagination/About';
import Portfolio from './pagination/Portfolio';
import Program from './pagination/Program';
import Facilities from './pagination/Facilities';
import Contact from './pagination/Contact';


const router = createBrowserRouter([

    { path: '/', element: <App /> },
    { path: '/about', element: <About />},
    { path: '/portfolio', element: <Portfolio />},
    { path: '/program', element: <Program />},
    { path: '/facilities', element: <Facilities />},
    { path: '/contact', element: <Contact />}
    
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

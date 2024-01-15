import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'

import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<Home/>}/>
      
      {/* Auth */}
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/register' element={<Register/>}/>


      <Route  path='/about' element={<About/>}/>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

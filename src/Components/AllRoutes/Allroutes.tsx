import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../Auth/Login/Login'
import Create from '../Auth/Create/Create'
import Homescreen from '../Homescreen/Homescreen'


const Allroutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Homescreen />
        },
        {
            path: "/register",
            element: <Create />
        },
        {
            path: "/login",
            element: <Login />
        },
          
        
        
    ])
  return element
}

export default Allroutes
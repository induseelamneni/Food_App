import './App.css';
import {Provider} from "react-redux"
import store from "./utils/appStore";

import React, { useEffect, useState } from 'react'
import {lazy,Suspense} from "react"
// import ReactDOM from 'react-dom/client'
import FoodDeliveryApp from './Components/FoodDeliveryApp.js'
// import AboutUs from './Components/AboutUs.js'
import NavBar from "./Components/Navbar.js"
import Cart from './Components/Cart'

import Contact from './Components/Contact'
import ErrorComponent from './Components/ErrorComponent'

import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import RestarentMenu from './Components/RestarentMenu'
import UserContext from './utils/UserContext'
import { BrowserRouter } from 'react-router-dom';
// import Grocery from './Components/Grocery'

import appStore from './utils/appStore'

const Grocery = lazy(() => import('./Components/Grocery'))
const AboutUs = lazy(() => import("./Components/AboutUs.js"))

const AppLayout = () => {
    const [user, setUser] = useState("")

    useEffect(() => {
        const data = [{userName : "indu"}]
        setUser(data[0].userName)

    },[])

    return (
        <Provider   store={appStore}>
        <UserContext.Provider value ={{loggedInUser: user, setUser}}>
        <>
          <NavBar />
          <Outlet />
          </>
          
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter =  createBrowserRouter([
    {
        path : "/",
        element:<AppLayout/>,
        children:[
            
            {
                path : "/",
                element:<FoodDeliveryApp/>,
            },
            {
                path:'/about',
                element: (<Suspense fallback={<h1>Loading....</h1>}> <AboutUs /> </Suspense>),

        
            },
            {
                path : "/contact",
                element:<Contact/>,
        
            },
            {
                path : "/grocery",
                element:(<Suspense fallback={<h1>Loading....</h1> }> <Grocery/> </Suspense>),
        
            },
            {
                path : "/restaurant/:resId",
                element: <RestarentMenu />
            },
            {
                path:"/cart",
                element:<Cart />
            }
        
        ],
        errorElement: <ErrorComponent />
      
    }
    
])

function App() {
  return (
   
     <div className="App">

      <RouterProvider  router={appRouter} />
  
     </div>
   

    
    // <Provider store = {store}>
    // <div className="App">
    //   <NavBar />
     
    // </div>
    // </Provider>
  );
}

export default App;


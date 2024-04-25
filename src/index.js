import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home"
// import About from "./components/About"




import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
 
} from "react-router-dom";
import Layout from './Layout';
import { lazy } from 'react';




const About= lazy(() => import('./components/About'));
const Contact= lazy(() => import('./components/Contact'));




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>

      <Route path='/about' element={
      <Suspense>
<About/>
      </Suspense>
      
      }/>
      <Route path='/contact' element={
      <Suspense>
<Contact/>
      </Suspense>
      
      
      }/>
      {/* <Route path='/career' element={<Career/>}/> */}

      



    </Route>
  )
)
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

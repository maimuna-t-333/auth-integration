import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import root from './layout/root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Orders from './Components/Orders/Orders.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import Profile from './Components/Profile/Profile.jsx';
import DashBoard from './Components/DashBoard/DashBoard.jsx';

// export const Autthontext=createContext(null)

// const userInfo={
//   email:'Potato@gmail.com'
// }


const router = createBrowserRouter([
  {
    path: "/",
    Component:root,
    children:[{
      index:true,
      Component:Home,
    },
    {
      path:'login',
      Component:Login,
    },
    {
      path:'register',
      Component:Register
    },
    {
      path:'orders',
      // Component:Orders
      element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
    },
    {
      path:'profile',
      element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Autthontext value={userInfo}>
    <RouterProvider router={router} />
    </Autthontext> */}
   
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
     
  </StrictMode>,
)

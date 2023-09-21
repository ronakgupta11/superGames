import '@rainbow-me/rainbowkit/styles.css';

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import Pricing from './routes/pricing';
import Games from './routes/games';
import Bankpanic from './routes/bankpanic';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children: [
      {
        path: "/pricing",
        element:<Pricing/>,
      },
      {
        path: "/games",
        element:<Games/>,
      },
      {
        path: "/games/bankpanic",
        element:<Bankpanic/>,
      },
    ],
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(

      <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,

)

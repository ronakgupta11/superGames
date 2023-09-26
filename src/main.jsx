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
import CardMemory from './routes/cardmemory';
import Account from './routes/account';
import Movies from './routes/movies';
import Home from './routes/index';
import ErrorPage from './error-page';
import MoviePage,{loader as movieLoader} from './routes/MoviePage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children: [
      {index:true,element:<Home/>},
      {
        path: "/pricing",
        element:<Pricing/>,
      },
      {
        path: "/games",
        element:<Games/>,
      },
      {
        path: "/movies",
        element:<Movies/>,
      },
      {
        path: "/account",
        element:<Account/>,
      },
      {
        path: "/games/bankpanic",
        element:<Bankpanic/>,
      },
      {
        path: "/games/cardmemory",
        element:<CardMemory/>,
      },
      {
        path: "/movies/:movieId",
        element:<MoviePage/>,
        loader:movieLoader,
      },
    ],
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(

      <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,

)

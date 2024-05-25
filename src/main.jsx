import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import Button1 from './Screen/Button1'
import Button2 from './Screen/Button2'
import Page from './Screen/Page'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: 'button1',
        element:<Button1 />
      },
      {
        path: 'button2',
        element: <Button2 />
      }
    ],
  },
  {
    path:'page',
    element:<Page />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

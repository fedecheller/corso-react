import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contacts from './Contacts.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import './index.css'

import store from './redux/store'
import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>
  },
  {
    path:'/contacts',
    element: <Contacts></Contacts>
  },
  {
    path:'/contacts/:contactId',
    element: <Contact></Contact>
  },
  {
    path:'/contacts/:contactId/:otherRootParam',
    element: <Contact></Contact>
  },
  {
    path:'/about',
    element: <About />,
    children: [
      {
        path: ':contactId',
        element: <Contact />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

import { useState } from 'react'
import './App.css'
import {Outlet, RouterProvider} from 'react-router-dom'
import router from './routes/index';

function App() {
  return (
    <RouterProvider router={router}>
      <div className="app">
        <Outlet />
      </div>
    </RouterProvider>
  )
}

export default App

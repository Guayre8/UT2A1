import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Reports from './pages/Reports'
import ErrorPage from './pages/ErrorPage'
import ProtectedRoute from './components/ProtectedRoute.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/reports', element: <Reports /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App

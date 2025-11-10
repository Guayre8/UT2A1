import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const autenticado = localStorage.getItem('autenticado') === 'true'

  if (!autenticado) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}

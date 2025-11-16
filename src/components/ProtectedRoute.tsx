import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export default function ProtectedRoute() {
  const autenticado = useSelector((state: RootState) => state.autenticador.autenticado);

  if (!autenticado) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

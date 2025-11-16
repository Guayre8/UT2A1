import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  autenticado: boolean;
  nombreUsuario: string;
  rolUsuario: string;
}

//Cuando se inicia la aplicacion el usuario no va ha estar autenticado
const initialState: AuthState = {
  autenticado: false,
  nombreUsuario: '',
  rolUsuario: ''
};

//Slice de autenticación
const authSlice = createSlice({
  name: 'autenticacion',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ nombre: string; rol: string }>) => {
      state.autenticado = true;
      state.nombreUsuario = action.payload.nombre;
      state.rolUsuario = action.payload.rol;
    },
    //Liempiamos el estado al hacer logout
    logout: (state) => {
      state.autenticado = false;
      state.nombreUsuario = '';
      state.rolUsuario = '';
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

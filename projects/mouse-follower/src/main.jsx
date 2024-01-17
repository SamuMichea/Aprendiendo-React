import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // ----- STRICTMODE NO FUNCIONA EN PRODUCCION
  // STRICTMODE sirve para : 
  // - Avisar si estas ocupando codigo antiguo de REACT
  // - Si estas haciendo algo incorrecto
  // - Ejecuta efecto / cleanup / efecto, para asegurarse de que la depuracion del codigo sea correcta
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)

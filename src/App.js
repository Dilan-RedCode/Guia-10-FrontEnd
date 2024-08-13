import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Owl
        </p>
        <table class="creador">
          <th>
            Proyecto Creado Por:
            <tr>Nombres:
              <td>Dilan Alejandro</td>
            </tr>
            <tr>Apellidos: 
              <td>Chaverra Ceballos</td>
            </tr>
            <tr>Correo: 
              <td>dilanchaverra1@gmail.com</td>
            </tr>
            <tr>Celular: 
              <td>3117074441</td>
            </tr>
          </th>

        </table>

      </header>
    </div>
  );
}

export default App;

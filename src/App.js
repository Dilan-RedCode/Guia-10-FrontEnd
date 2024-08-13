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
        <h2>¿Qué es Babel?</h2>
        <p>Babel es una herramienta online que nos permite transformar el código JavaScript que escribimos durante el desarrollo de un proyecto en código JavaScript que el navegador entiende. Esta herramienta surge en un momento en el que se necesitaba procesar las nuevas features de JavaScript introducidas por ECMAScript 6</p>
        <h2>¿Que es WebPack?</h2>
        <p> Webpack es esta cosa que agarra todas las piezas de tu aplicación (archivos, imágenes, fuentes, JS, CSS, HTML, etc.) y las agrupa en un archivo grande. De esa manera, puedes dividir tu aplicación en muchas partes y luego combinarlas al final del proceso de codificación.</p>
        <h2>¿Para que sirve react?</h2>
        <p>React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.</p>

      </header>
    </div>
  );
}

export default App;

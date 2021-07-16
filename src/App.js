import React from 'react';


import Navbar from './components/Navbar/Navbar';

//Anatomia de um componente React / Básicamente uma função JS.
//Tudo deve encapsulado numa só div, ou seja, um nó.
function App() {
  return (
    <div className="App">
      <Navbar />
      <ul>
          <li>Aprendendo React</li>
          <li>Aprendendo sobre componentes</li>
      </ul>
    </div>
  );
}

export default App;

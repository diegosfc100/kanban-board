import React from 'react';
import './index.css';


import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList'

//Anatomia de um componente React / Básicamente uma função JS.
//Tudo deve encapsulado numa só div, ou seja, um nó.
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title="A Fazer"/>
        <TaskList title="Fazendo"/>
        <TaskList title="Feito"/>
      </div>
    </div>
  );
}

export default App;

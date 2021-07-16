import React, {useState} from 'react';
import './index.css';


import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList'

const task = {
    id: 0,
    title: "Nova Tarefa",
    state: "Pendente"
}

//Anatomia de um componente React / Básicamente uma função JS.
//Tudo deve encapsulado numa só div, ou seja, um nó.
function App() {
    const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title={`A Fazer`}/>
        <TaskList title="Fazendo"/>
        <TaskList title="Feito"/>
      </div>
    </div>
  );
}

export default App;

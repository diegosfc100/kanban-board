import React, {useState} from 'react';
import './index.css';


import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList'

let idAcc = 0;
const generateId = () => {
    idAcc += 1;
    return idAcc;
};

//Anatomia de um componente React / Básicamente uma função JS.
//Tudo deve encapsulado numa só div, ou seja, um nó.
function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (title, state) => {
        const newTask = {
            id: generateId(),
            title,
            state
        }
        setTasks((existingTasks) => {
            return [...existingTasks, newTask]
        });
    };

    const updateTask = (id, title, state) => {
        setTasks((existingTasks) => {
            return existingTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, title, state };
                } else {
                    return task;
                }
            });
        });
    };

    const deleteTask = (id) => {
        setTasks ((exitingTasks) => {
            return exitingTasks.filter((task) => task.id !== id)
        });
    }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
         title="A Fazer" 
         onAddTask={addTask} 
         taskState = "A Fazer"
         tasks={tasks.filter((t) => t.state === "A Fazer")}
         onTaskUpdate={updateTask}
         onDeleteTask ={deleteTask}
         />  

         <TaskList
         title="Fazendo" 
         onAddTask={addTask} 
         taskState = "Fazendo"
         tasks={tasks.filter((t) => t.state === "Fazendo")}
         onTaskUpdate={updateTask}
         onDeleteTask ={deleteTask}
         /> 

         <TaskList
         title="Feito" 
         onAddTask={addTask} 
         taskState = "Feito"
         tasks={tasks.filter((t) => t.state === "Feito")}
         onTaskUpdate={updateTask}
         onDeleteTask ={deleteTask}
         />       
      </div>
    </div>
  );
}

export default App;

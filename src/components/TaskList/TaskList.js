import React from 'react';
import './tasklist.css';
import PropTypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem"

export default function TaskList({title, onAddTask, tasks}) {

    const addTask = () => {
        onAddTask('Nova Tarefa', 'Pendente')
    };

    return(
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content"></div>
            {tasks.map((task) => {
                return (
                    <TaskItem 
                        key={task.id} /* O react necessita dessa prop para renderizar os componentes */
                        id={task.id}
                        title={task.title}
                        taskState={task.state}
                    />
                );
            })}
            <button onClick={addTask}>Adicionar Tarefa</button>
        </div>
    )
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
};
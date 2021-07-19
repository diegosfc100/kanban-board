import React from 'react';
import PropTypes from "prop-types"

export default function TaskItem({id, title, taskState}){

    return <div>{title}</div>
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
}
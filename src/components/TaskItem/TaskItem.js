import React, { useState } from 'react';
import PropTypes from "prop-types"

export default function TaskItem({id, title, taskState}){
    const[isEditing, setIsEditing] = useState(false);
    const[editableTitle, setEditableTitle] = useState(title);

    const onTitleChange = (event) => {
        const newTitle = event.target.value;
        setEditableTitle(newTitle);
    }

    const onKeyPress = (event) => {
        if (event.key === "Enter"){
            setIsEditing(false);
        }
    };

    if (isEditing){
        return(
            <input
                type="text"
                value={editableTitle}
                onChange={onTitleChange}
                onKeyPress={onKeyPress}
                />
        );
    } else{
        return <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
    }
        
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
}


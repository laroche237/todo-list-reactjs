import React, { useState } from 'react'

 function TodoItem(props) {
  const [isEditing, setIsEditing]= useState(false);
  const [newText, setNewText]= useState(props.todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => { props.editTodo(props.todo.id, newText);
    setIsEditing(false);
  };
  return (
    <div
    className={props.todo.isComplete ? 'todo-row complete' : 'todo-row'}
    >
      {
        isEditing ? (
        <input
         type = "text"
        value = {newText}
        onChange={(e) => setNewText(e.target.value) }/>)
        :(<div
          onClick={() => props.completeTodo(props.todo.id)}>
            {props.todo.text}
            </div> 
        )
      }
        
        <div className='icons'>
          {isEditing ? (<button onClick={handleSave}>
         Save
        </button>):(
          <>
          <button onClick={handleEdit}>Edit</button>
        <button onClick={()=> props.removeTodo(props.todo.id) }>
        🗑️
        </button>
        </>
      )}
       </div>
       </div>
  );
}
export default TodoItem;

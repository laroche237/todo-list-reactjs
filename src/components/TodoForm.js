import React, {useState} from "react";

function TodoForm(props){
    const [input, setInput]=useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Date.now(),
            text:input,
            isComplete:false
        });

        setInput('');
    };

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Ajouter</button>
    </form>
    );
}

export default TodoForm;
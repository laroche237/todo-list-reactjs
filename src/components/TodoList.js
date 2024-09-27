import React from "react";
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <div>
            {
                props.todos.map(todo => (
                    <TodoItem 
                    key = {todo.id}
                    todo = {todo}

                    completeTodo={props.completeTodo}
                    removeTodo={props.removeTodo}
                    editTodo={props.editTodo}
                    />
                ))
            }
        </div>
    );
}

export default TodoList;
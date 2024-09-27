import React, {useEffect, useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {

  
   const [todos, setTodos]=useState([]);
   const[filter, setFilter]=useState('all');

   //charger les taches depuis localstorage au montage
   useEffect(() =>{
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if(savedTodos){
      setTodos(savedTodos);
    }
   }, [] );

   //Sauvegarder les taches dans localstorage à chaque changement 
   useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
   }, [todos]);

   //Ajouter une nouvelle tâche
   const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
   };

   //Supprimer une tâche
   const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !==id);
    setTodos(removeArr);
   };

   //Marquer une tâche comme complétée
   const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
   };

   const editTodo = (id, newText) =>{
    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, text:newText}:todo));
   };

   const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if(filter==='active') return !todo.isComplete;
    if(filter==='completed') return todo.isComplete;
   }
   );
   return(
    <div className="app">
    <h1>Ma To-Do List</h1>
    <TodoForm onSubmit={addTodo} />
    <TodoList 
      todos={filteredTodos} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo} 
      editTodo={editTodo}
    />
<div className='filter-buttons'>
<button onClick={() =>
  setFilter('all')
 }>Toutes</button>

<button onClick={() =>
  setFilter('active')
 }>Actives</button>

<button onClick={() =>
  setFilter('completed')
 }>Complétées</button>

</div>

     </div>

     
   );
   
}

export default App;

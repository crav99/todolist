import TodoForm from "./TodoForm";
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function Todo() {
    const [todoItems, setTodoItems] = useState([]);

    const addTodo = (value) => {
        setTodoItems([...todoItems, { id: uuidv4(), task: value, completed: false}]);
    };

    const deleteTodo = (id) => {
        setTodoItems(todoItems.filter((todo) => id !== todo.id));
    };

    const setComplete = (id) => {
        setTodoItems(todoItems.map(
            (todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
    };

    return ( 
        <div className="todo">
            <h1>To Do List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todoItems={todoItems} deleteTodo={deleteTodo} setComplete={setComplete} />
        </div>
    );
}

export default Todo;
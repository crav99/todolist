import { useState } from "react";

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    };

    return ( 
        <form onSubmit={handleSubmit} className="todoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="To Do Item" className="todoInput" />
            <button className="todoButton">Add ToDo</button>
        </form>
     );
}

export default TodoForm;
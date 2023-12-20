import TodoItem from "./TodoItem";

function TodoList({ todoItems, deleteTodo, setComplete, editTodo }) {
    return ( 
        <div className="todoList">
            {todoItems.map((todo) => <TodoItem key={todo.id} item={todo} deleteTodo={deleteTodo} setComplete={setComplete} />)}
        </div>
     );
}

export default TodoList;
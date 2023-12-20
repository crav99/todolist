import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem({ item, deleteTodo, setComplete, editTodo }) {

    return ( 
        <div className="todoItem">
            {(item.completed)
                ? <label className="completed" onClick={() => setComplete(item.id)}>{item.task}</label>
                : <label onClick={() => setComplete(item.id)}>{item.task}</label>
            }
            <button onClick={() => deleteTodo(item.id)}><FontAwesomeIcon className="delete-icon" icon={faTrash} /></button>
        </div>
     );
}

export default TodoItem;
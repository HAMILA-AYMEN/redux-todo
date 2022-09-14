
import Addtask from './Addtask';
import Task from './Task'
import {useSelector} from 'react-redux'
import Filter from './Filter'
import {filters} from '../redux/taskSlice'

export default function ListTask(){
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
 
  const filteredTodo = () => {
    if(filter === filters.COMPLETED) {
      return todos.filter(todo => todo.isDone);
    }
    if(filter === filters.NOT_COMPLETED) {
      return todos.filter(todo => !todo.isDone)
    }
    // if none of above return all todos
    return todos;
  } 
     
    
      
  return (
    <div className="app">
     <Filter />
      <div className="todo-list">
      {filteredTodo().map((todo) => (
        <Task  key={todo.id} {...todo}  />
      ))}
      </div>
   <Addtask />
   
    </div>
  )
}



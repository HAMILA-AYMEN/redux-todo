
import Addtask from './Addtask';
import Task from './Task'
import {useSelector} from 'react-redux'
import Filter from './Filter'
import {filters} from '../redux/taskSlice'

export default function ListTask(){
  const todos = useSelector((state) => state.tasks.todos);
  const filter = useSelector((state) => state.tasks.filter);
 
console.log(filter)

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
      <Addtask />
     <Filter />
     <h2 style={{textAlign:"center"}}>Tasks</h2>
      <div className="todo-list">
        
      {filteredTodo().map((todo) => (
        <Task  key={todo.id} {...todo}  />
      ))}
      </div>
   
   
    </div>
  )
}



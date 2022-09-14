import React, { useState } from "react";
import {Form ,Button}from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {completeTodo} from '../redux/taskSlice'
import {updateTodos} from '../redux/taskSlice'







function Task({id,Description,isDone}) {

  const [value, setValue] = useState("");
  const dispatch = useDispatch()

  const handleCompleteClick =()=>{
    dispatch(completeTodo({id:id}))
  }
  const handleUpdate = e => {
    e.preventDefault();
    dispatch(updateTodos({
      Description:value,id
    }))
    setValue('')
  };
 
  
 
        
    
  
  
  return (
    <div>
    
    <li className={`list-group-item ${isDone&& 'list-group-item-success'}`}>
      <div className ='d-flex justify-content-center' >
        <span className='d-flex align-items-center'>
          <input 
          type='checkbox'
          className='mr-3'
          checked={isDone}
          onChange={handleCompleteClick}
          >
          </input>
          {Description}

        </span>
        </div>
        </li>

        <Form.Control as="textarea"  
          value={value}
           onChange={e => setValue(e.target.value)}
    
           />
        
        
       <Button variant="secondary" onClick={handleUpdate}>Update</Button>
        
      </div>



   

    
    
  )
}

export default Task

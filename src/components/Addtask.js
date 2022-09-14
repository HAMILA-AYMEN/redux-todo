import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {addtask} from '../redux/taskSlice'




function Addtask() {
    
    const [value, setValue] = useState("");
    const dispatch = useDispatch()
    
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addtask({
      Description:value
    }))
    setValue('')
  };
  
  
  return (
    <div>
   <Button variant="primary"onClick={handleSubmit}>Addtask</Button>
   
  

      
    <Form.Control as="textarea"  
          value={value}
           onChange={e => setValue(e.target.value)}
    
    />
    </div>
  )
}

export default Addtask

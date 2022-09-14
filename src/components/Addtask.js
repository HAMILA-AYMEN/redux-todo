import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {addtask} from '../redux/taskSlice'
import { SiAddthis } from 'react-icons/si';




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
   
   
  
   <SiAddthis variant="primary"onClick={handleSubmit}/>
      
    <Form.Control as="textarea"  
    
          value={value}
           onChange={e => setValue(e.target.value)}
           placeholder="Add New Task"
    
    />
    </div>
  )
}

export default Addtask

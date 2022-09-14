import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

import 'react-dropdown/style.css';
import {useDispatch} from 'react-redux'
import {filterBy,filters} from '../redux/taskSlice'

export default function Filter() {
    const dispatch = useDispatch()
    
      
   
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{dispatch(filterBy(filters.ALL))}}>All</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(filterBy(filters.COMPLETED))}}>Completed</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(filterBy(filters.NOT_COMPLETED))}}>Not completed</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}



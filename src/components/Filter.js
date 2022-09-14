import React from 'react'

import 'react-dropdown/style.css';
import {useDispatch} from 'react-redux'
import {filterBy,filters} from '../redux/taskSlice'

export default function Filter() {
    const dispatch = useDispatch()
    
      
   
  return (
    <>
      
      <button onClick={dispatch(filterBy(filters.ALL))}>All</button>
      <button onClick={dispatch(filterBy(filters.COMPLETED))}>Completed</button>
      <button onClick={dispatch(filterBy(filters.NOT_COMPLETED))}>
        Not completed
      </button>
    </>
  )
}



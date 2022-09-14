import { createSlice} from '@reduxjs/toolkit'
export const filters = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    NOT_COMPLETED: "NOT_COMPLETED"
  }

const taskSlice = createSlice({
    name:"todos",
    initialState:{
        todos:[
        {
            id:1,
            Description:"Learn React",
            isDone:false
        },
        {
          id:2,
          Description:"Learn Redux",
          isDone:false
        },
        {
          id:3,
          Description:"Learn MongoDB",
          isDone:false
        },
        {
            id:4,
            Description:"Learn Sql",
            isDone:false
          }
    ],
    filterBy:filters.ALL
},
    
    reducers:{
        addtask(state, action) {
            state.todos.push({
              id: new Date().toISOString(),
              Description: action.payload.Description,
            });
          },
          completeTodo(state, action) {
            const completeTodoItem = state.todos.find(
              (todo) => todo.id === action.payload.id
            );
            completeTodoItem.isDone = !completeTodoItem.isDone;
          },
        updateTodos(state, action)  {
          const updateTodosItem = state.todos.find((todo)=>todo.id === action.payload.id)
          updateTodosItem.Description=action.payload.Description
            
          },


          filterBy(state, action) {
            state.filterBy = action.payload
          },
    }
})
const { actions, reducer } = taskSlice;
export const{addtask,completeTodo,updateTodos,filterBy} = actions
export default reducer
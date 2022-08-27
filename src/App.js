
import { useReducer } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';



function reducer(state,action){
  switch(action.type){
    case 'addTodo':
      const newTodo = {id:Date.now(),todoValue:action.payload.name,completed:false}
      return [...state,newTodo]
    case 'dltTodo':
      return state.filter((item)=> item.id!==action.payload.id)
    case 'todoCompleted':
      return (
       
        state.map((item)=>{
            if(item.id===action.payload.id){
              return {...item,completed:!item.completed}
            }else{
              return item;
            }
        })

      )
    default:
      return state;
  }

}


function App() {

  const [state, dispatch] = useReducer(reducer,[])
  console.log(state)
  return (
    <div className='App'>
   <AddTodo dispatch={dispatch}/>
   <hr className='divider'></hr>
   {
    state.map((todoitem)=>{

     return <List key={todoitem.id} item={todoitem} dispatch={dispatch}/>
     })
   }
    </div>
  );
}

export default App;

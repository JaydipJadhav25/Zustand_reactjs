
import { useState } from 'react';
import './App.css'
import { useCounter } from './store/useStore';
// import uuid from "uuid"
// interface NumberState{
//   num : number;
// }

function App() {

  

  // const[num , setNum] = useState<NumberState>(0)
  const[num , setNum] = useState<number>(0)
  const[tast , setTast] = useState<string>("");
  const{addCount , count , checkOddOrEven , status , addNumber  , reset , todos , addTodo} =useCounter();
    console.log("count : " , count)
 
    // const result : any = showCount()
    function handlfrom(){
      addNumber(num )
      checkOddOrEven()
    }

    function handlTodoForm(){
        addTodo({
          id : Math.floor(Math.random()*100).toString(),
          name : tast
        })
    }
  return (

    <>
      <h1>Zustand And React</h1>
      <p>{count} : {status}</p>
      <button onClick={()=> {
        addCount();
       checkOddOrEven()
      }}>add</button>

          <button onClick={()=> {
        reset()
        checkOddOrEven()
      }}>Reset</button>
      <form  onSubmit={(e)=>{
        e.preventDefault();
        handlfrom()
      }}>
        <input type="number" onChange={(e)=>{
          
           const num : number= Number(e.target.value)
           setNum(num);
        }}/>
        <button>add number</button>
      </form>

        <hr />
        <h1>ToDO</h1>
        <form onSubmit={(e)=>{
          e.preventDefault();
          handlTodoForm();
          setTast("")
        }}>
          <label htmlFor="tast">task</label>
          <input type="text" value={tast} onChange={(e)=>{setTast(e.target.value)}} />
          <button>add task</button>
        </form>
        <p>todos :</p>
        {
          todos.map((ele , index) =>
            <li key={index}>{ele.name}</li>
          )
        }
    
    </>
  )
}

export default App

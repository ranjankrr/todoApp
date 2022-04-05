import React,{useEffect, useState} from 'react';
import './App.css';

let App = ()=>{
  let [add, setAdd] = useState("");
  let [list, setList] = useState([]);
  useEffect(()=>{
    document.title="ToDoList";
  })
  let textChange = (e) =>{
    setAdd(e.target.value);
  }
  let textAdd = () =>{
       setList( (oldItem)=>{
         return [add, ...oldItem];
     })
     setAdd("");
  }
   return(
    <>
       <div className="container">
           <div className="Sub-container">
               <h2>ToDo List</h2>
               <input type="text" placeholder="Add Your Itmes" 
               value={add}
               onChange={textChange}
               />
               <button onClick={textAdd}>Add</button>
               <ul className="list-Items">
                 {list.map((listValue)=>{
                   return <li>{listValue}</li>
                  })}
                 </ul>
           </div>
       </div>
    </>
  );
}
export default App;
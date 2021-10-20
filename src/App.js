import React, { useState } from "react";
import { Addtodo } from "./Components/Addtodo";
import { Footer } from "./Components/footer";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";

function App() {

   const onDelete = (todo) => {
      console.log("Ondelete work suuccess", todo);
      setTodos(todos.filter((e)=>{
        return e!==todo;
      }));
   }



   const addtodo = (title, desc) =>{
    console.log("I am adding this todo", title, desc);
  let sno = todos[todos.length-1].sno+1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
   }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title:  "Go to the markeet",
      desc: "You need To 1"
    },
    
  ])

  return (
    <div>
      <Header title="ToDos-App" Searchbarr={true}/>
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;

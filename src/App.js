import React, { useState } from "react";
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


  const [todos, setTodos] = useState([
    {
      sno: 1,
      title:  "Go to the markeet",
      desc: "You need To 1"
    },
    {
      sno: 2,
      title:  "Go to the mall",
      desc: "You need To 2"
    },
    {
      sno: 3,
      title:  "Go to the school",
      desc: "You need To 3"
    }
    
  ])

  return (
    <div>
      <Header title="ToDos-App" Searchbarr={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;

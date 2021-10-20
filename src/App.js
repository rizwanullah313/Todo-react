import React from "react";
import { Footer } from "./Components/footer";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";

function App() {
  return (
    <div>
      <Header title="ToDos-App" Searchbarr={true}/>
      <Todos/>
      <Footer/>
    </div>
  );
}

export default App;

import React, { useState } from "react";


export const Addtodo = ({addtodo}) => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();

    const submit = (event)=>{
        event.preventDefault();
      if(!title || !desc){
          alert("Title or description cannot be blank");
      }
      addtodo(title, desc);
    }

  return (
    <div className="container my-5">
         <h3>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Add Todo Item</label>
    <input type="text" value={title} onChange={(event)=>setTitle(event.target.value || '')} className="form-control" id="addTodo"  />
  </div>
  <div className="mb-3">
    <label htmlFor="" className="form-label">Todo Description</label>
    <input type="text"  value={desc} onChange={(event)=>setDesc(event.target.value ||'')}  className="form-control" id="tododesc" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
};
// onChange={(e)=>setDesc(e.target.value)}
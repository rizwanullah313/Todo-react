import React, { useState } from "react";
import { Form,Button, } from 'react-bootstrap';


export const Addtodo = ({addtodo}) => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();

    const submit = (e)=>{
      e.preventDefault();
      if(!title || !desc){
          alert("Title or description cannot be blank");
      }
      addtodo(title, desc);
    }

  return (
    <div className="container my-5">
        <h3>Add a Todo</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="todotitle">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control type="text" placeholder="Todo Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="tododesc">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control type="text" placeholder="Todo Description" value={desc} onChange={(e)=>setDesc(e.target.value)}  />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn btn-sm">
          Add Todo
        </Button>
      </Form>
    </div>
  );
};
// onChange={(e)=>setDesc(e.target.value)}
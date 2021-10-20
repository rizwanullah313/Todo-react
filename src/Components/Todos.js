import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
        <div className="container text-center my-3">
            <h4>Todo-List</h4>
            {props.todos.length===0? "No Todos To Display":
            props.todos.map((todo) => {
                return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        </div>
    )
}

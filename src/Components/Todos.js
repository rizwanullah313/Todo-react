import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
        <div className="container text-center my-3">
            Todos work
            <Todo todo={props.todos[2]}/>
        </div>
    )
}

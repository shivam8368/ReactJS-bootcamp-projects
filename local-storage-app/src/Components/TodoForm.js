import React, {useState} from "react";
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, Container}
from "reactstrap";
import { v4 } from "uuid";


const TodoForm = ({ addTodos }) => {
    const[todoString , setTodoString] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (todoString === "") {
            return alert("please fill some value.")
            
        }

        const todo = {
            todoString,
            id: v4()
        };

        addTodos(todo);

        setTodoString("");
    };

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type = "text"
                    name = "todo"
                    id = "todo"
                    placeholder = "Enter a todo"
                    value = {todoString}
                    onChange = {e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType = "append"> 
                    <Button color = "success">Click Me</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>

        </Form>

    )
};

export default TodoForm; 
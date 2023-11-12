import { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import { TodoContext } from '../../context/TodoContext.js';

export const TodoItem = ({
    _id,
    text,
    isCompleted
}) => {

    const { onTodoDeleteClick, onTodoComplete } = useContext(TodoContext)

    return (
      <ListGroup.Item style={{display : 'flex',justifyContent:'space-between'}} onClick={() => onTodoComplete(_id)}>
        <p style={{textDecoration : isCompleted ? 'line-through' : 'none' }}>{text}</p>
        <Button variant='dark' onClick={() => onTodoDeleteClick(_id)}>X</Button>
        </ListGroup.Item>
    )
}
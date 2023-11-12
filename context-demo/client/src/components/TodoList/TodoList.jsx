import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { TodoItem } from '../TodoItem/TodoItem.jsx';

export const TodoList = ({
    todos,
    onTodoAddClick,
    
}) => {
  return (
    <ListGroup >
      {todos.map(x => <TodoItem text={x.text} key={x._id} _id={x._id} isCompleted={x.isCompleted}/>)}
      <Button variant="success" style={{width : '100px'}} onClick={onTodoAddClick}>Add Todo</Button>{' '}
    </ListGroup>
  );
}

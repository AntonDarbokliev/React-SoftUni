import Todo from "./Todo.js";


export default function TodoList({ 
  todos,
  toggleStatus
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) =>  <Todo key= {todo._id} {...todo} toggleStatus = {toggleStatus} />)}
        
      </tbody>
    </table>
  );
}

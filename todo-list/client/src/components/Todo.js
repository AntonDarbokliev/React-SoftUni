export default function Todo({
    _id,
    text,
    isCompleted,
    toggleStatus
}){
    return (
        <tr className={ isCompleted ? "todo is-completed" : 'todo'}>
          <td>{text}</td>
          <td>{isCompleted ? 'Complete' : 'Not Complete'}</td>
          <td className="todo-action">
            <button className="btn todo-btn" onClick={() => toggleStatus(_id)} >Change status</button>
          </td>
        </tr>
    )
}
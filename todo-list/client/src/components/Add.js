export default function Add({
    add
}){
    return (
        <div className="add-btn-container">
            <button className="btn" onClick={() => add()}>+ Add new Todo</button>
          </div>
    )
}
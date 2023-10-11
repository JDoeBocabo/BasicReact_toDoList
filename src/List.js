export const List = (props) => {
    return (
          <div className="list" >
            <div className="list-item"> <p > {props.id}. </p> <p style={{textDecorationLine : props.completed ? 'line-through' : 'none'}}> {props.list}</p> </div>
            <button className="markDone" onClick={() => props.markDone(props.id)}>Done</button>
            <button className="delete" onClick={() => props.deleteList(props.id)}>Delete</button>
          </div>
    )
}
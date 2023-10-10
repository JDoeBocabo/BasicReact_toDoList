export const List = (props) => {
    return (
          <div className="list">
            <div className="list-item"> <p>{props.id}. {props.list}</p> </div>
            <button className="delete" onClick={() => props.deleteList(props.id)}>Done</button>
          </div>
    )
}
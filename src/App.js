import { useState } from 'react';
import './App.css';
import { List } from './List';
function App() {
  let [toDoList, settoDoList] = useState([]); 
  let [list, setlist] = useState(""); 

  const setToDo = (event) => {
    setlist(event.target.value)
  }

  const addList = () => {
    let newList = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      list: list,
      completed: false
    } 
    settoDoList([...toDoList, newList])
  }
  const deleteList = (id) => {
    let reducedList = toDoList.filter((li) =>{
      return li.id !== id
    })
    settoDoList(reducedList)
  }

    const markDone = (id) => {
    settoDoList(
      toDoList.map((li) => {
        if (li.id === id) {
          console.log(li.completed)
          return { ...li, completed: li.completed ? false : true};
        } else {
          return li;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='form'> 
        <input placeholder='add task' type="text" onChange={setToDo} />
        <button className="add" onClick={addList}>Add</button>
      </div>
      <hr />
      <div className='list-container'>
        {toDoList.map((toDo, key) => {
          return <List  completed={toDo.completed} markDone={markDone} list={toDo.list} id={toDo.id} key={key} deleteList={deleteList}/>
        })}
      </div>
    </div>
  );
}


export default App;

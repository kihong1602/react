import {useEffect, useState} from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setToDos(prev => [todo, ...prev]);
    setTodo("");
  }
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input type="text"
             placeholder={'Write your to do...'}
             value={todo}
             onChange={onChange}
      />
      <button>Add To Do</button>
    </form>
    <hr/>
    <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>;
}

export default App;

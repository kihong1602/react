import {useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log('call api');
  return (
      <div>
        <h1>{counter}</h1>
        <button onClick={onClick}>Click Me</button>
      </div>
  )
}

export default App;

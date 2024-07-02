import {useEffect, useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log('I run all time');
  useEffect(() => {
    console.log('Call api');
  }, []); // 최초 렌더링 시에만 실행할 작업을 할당할 때 useEffect 훅을 사용함.
  return (
      <div>
        <h1>{counter}</h1>
        <button onClick={onClick}>Click Me</button>
      </div>
  )
}

export default App;

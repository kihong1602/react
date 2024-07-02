import {useEffect, useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log('I run all time');
  useEffect(() => {
    console.log('Call api');
  }, []); // 최초 렌더링 시에만 실행할 작업을 할당할 때 useEffect 훅을 사용함.

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`Search for ${keyword}`)
    }
  }, [keyword]) // keyword 변수가 변경될 때만 실행됨

  return (
      <div>
        <input type="text" placeholder={'Search Here'} value={keyword} onChange={onChange}/>
        <h1>{counter}</h1>
        <button onClick={onClick}>Click Me</button>
      </div>
  )
}

export default App;

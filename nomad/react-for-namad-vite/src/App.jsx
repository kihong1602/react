import {useEffect, useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter(prev => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log('I Running All Times')

  useEffect(() => {
    console.log('Call API');
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`Search For ${keyword}`)
    }
  }, [keyword]);

  return (
      <div>
        <input type="text" placeholder={'Search Here'} value={keyword} onChange={onChange}/>
        <h1>{counter}</h1>
        <button onClick={onClick}>Click Me</button>
      </div>
  )
}

export default App;

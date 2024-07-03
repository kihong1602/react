import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const onChange = (e) => setMoney(e.target.value);
  useEffect(() => {
    axios.get('https://api.coinpaprika.com/v1/tickers')
    .then(res => res.data)
    .then(data => {
      setCoins(data);
      setLoading(false);
    });
  }, []);
  return (
      <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        <input type="number" value={money} onChange={onChange} placeholder={'Input Your Money'}/>
        {loading ? <strong>Loading...</strong> : (
            <select>
              {
                coins.map((coin, index) =>
                    <option key={index}>
                      {coin.name} ({coin.symbol}): {money / coin.quotes.USD.price} {coin.symbol}
                    </option>)
              }
            </select>
        )}
      </div>
  )
}

export default App;

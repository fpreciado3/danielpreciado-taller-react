import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  setTimeout(
    () => {
      setData('give feedback');
      setIsLoading(false);
    },
    1000
  )

  const [point, setPoint] = useState(0);
  const [counter, setCounter] = useState(0);
  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  const incrementGood = () => setGood(good + 1) & setCounter(counter + 1) & setGoodCounter(goodCounter + 1) & setPoint(point + 1);
  const incrementNeutral = () => setNeutral(neutral + 1) & setCounter(counter + 1) & setNeutralCounter(neutralCounter + 1);
  const incrementBad = () => setBad(bad + 1) & setCounter(counter + 1) & setBadCounter(badCounter + 1) & setPoint(point - 1);

  let toRender
  if(isLoading) {
    toRender = (<h1>Loading...</h1>)
  } else {
    toRender = (<h1>{data}</h1>)
  }

  return(
    <div>
      <div>{toRender}</div>
      <button onClick={incrementGood}>
        good
      </button>
      <button onClick={incrementNeutral}>
        neutral
      </button>
      <button onClick={incrementBad}>
        bad
      </button>
      <h1>statistics</h1>
      <div>good {goodCounter}</div>
      <div>neutral {neutralCounter}</div>
      <div>bad {badCounter}</div>
      <div>all {counter}</div>
      <div>average {(Number(point)/Number(counter))}</div>
      <div>positive {(Number(goodCounter))/Number(counter)*100}%</div>
    </div>
  )
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

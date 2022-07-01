import { useState } from 'react'

const App = () => {
  setTimeout(
    () => {
    setData('Llegaron los datos!');
    setIsLoading(false);
  },
  1000
)

  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");


  const incrementByOne = () => setCounter(counter + 1); 
  const decrementbyOne = () => setCounter(counter - 1);
  const resetToZero = () => setCounter(0);

  let toRender 
  if(isLoading) {
    toRender = (<h1>Loading data...</h1>)
  } else {
    toRender = (<p>{data}</p>)
  }

  return ( 
  <div>
  {toRender}
  <div> {counter} </div>
    <button onClick={incrementByOne} disabled={counter>=10}>
      Increment
    </button>
    <button onClick={decrementbyOne}>
      Decrement
    </button>
    <button onClick={resetToZero}>
      Reset
    </button>
  </div>
  )
}

export default App;
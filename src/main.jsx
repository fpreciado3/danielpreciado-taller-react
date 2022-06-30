import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({course}) => {
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({part1, exercise1, part2, exercise2, part3, exercise3}) => {
}


const Total = ({exercise1, exercise2, exercise3}) => {
  return(
    <p> Number of exercises {exercise1 + exercise2 + exercise3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return ( 
    <div>
      <Header course={course} />
      <Content />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

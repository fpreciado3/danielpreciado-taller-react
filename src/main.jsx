import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({course}) => {
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts, exercises}) => (
  <p>
    {parts.map(part => (
      <p>{part}</p>
    ))}
    {exercises.map(exercise => (
      <p>{exercise}</p>
    ))}
  </p>
)


const Total = ({exercise1, exercise2, exercise3}) => {
  return(
    <p> Number of exercises {exercise1 + exercise2 + exercise3}</p>
  )
}

const App = () => {
  const Parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component',
  ]

  const Exercises = [
    10,
    7,
    14,
  ]

  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  

  return ( 
    <div>
      <Header course={course} />
      <Content parts={Parts} exercises={Exercises} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

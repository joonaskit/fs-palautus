const Header = (props) => {
  console.log(props)
  return(
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.name} {props.count}
    </p>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
        <Part name={props.name1} count={props.count1}/>
        <Part name={props.name2} count={props.count2}/>
        <Part name={props.name3} count={props.count3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Nubmer of exercises {props.e1 + props.e2 + props.e3}</p>
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

  return(
    <div>
      <Header name={course} />
      <Content name1={part1} count1={exercises1} name2={part2} count2={exercises2} name3={part3} count3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}

export default App
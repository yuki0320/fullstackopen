/*
 * @since: 2022-10-25 18:33:50
 * @lastTime: 2022-10-30 17:37:38
 * @文件相对于项目的路径: \fullstackopen\part_1\courseinfo\src\App.js
 * @message: 
 */
const Header = ({course}) =>{
  return(
    <h1>{course}</h1>
  )
}
const Part = ({content}) =>{
  return (
    <p>
    {content.name} {content.exercises}
  </p>
  )
}
const Content = ({parts}) => {
  return (
    <div>
      <Part content={parts[0]}  />
      <Part content={parts[1]}  />
      <Part content={parts[2]}  />
    </div>
  
  )
}
const Total  = ({total}) =>{
  return (
    <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts =  [
    {
      name: 'Fundamentals of React', 
      exercises: 10
    },
    {
      name: 'Using props to pass data', 
      exercises: 7
    },
    {
      name: 'State of a component', 
      exercises: 14
    },
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total  total={parts} />
      
    </div>
  )
}

export default App;

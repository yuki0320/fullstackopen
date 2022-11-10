/*
 * @since: 2022-11-07 16:50:59
 * @lastTime: 2022-11-10 21:18:45
 * @文件相对于项目的路径: \fullstackopen\part_2\courseinfo\src\App.js
 * @message: 
 */
import Course from "./components/Course"
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      {
        courses.map(course => <Course course={course} key={course.id} />
      )}
    </div>
  )
}

export default App

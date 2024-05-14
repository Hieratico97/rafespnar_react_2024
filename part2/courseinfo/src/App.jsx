
const Header = ({ course }) => <h1>{course}</h1>



const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  const Total = parts.reduce((sum,part)=> sum+part.exercises,0)
  const contentParts = parts.map((part, index) => (
    <Part key={index} part={part}></Part>
  ))

  return (
    <div>
      {contentParts}
      <p>Total of {Total} exercises</p>
    </div>
  )
}





  
const Course = ({courses})=> {
 
  const Courses = courses.map((course,index)=>
    <div>
    <Header course={course.name}/>
    <Content key={index} parts={course.parts}/>
    </div>
    
  )
return(
   <div>
    {Courses}
  </div>
)

}

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
      <Course courses={courses}   />
    </div>
  )
}

export default App

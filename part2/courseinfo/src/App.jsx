
const Header = ({ course }) => <h1>{course}</h1>



const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  const contentParts = parts.map((part, index) => (
    <Part key={index} part={part}></Part>
  ));

  return (
    <div>
      {contentParts}
    </div>
  );
}





  
const Course = ({course, parts})=> {
  const Total = parts.reduce((sum,part)=> sum+part.exercises,0)
return(
  <div>
   <Header course={course} />
   <Content parts={parts} />
   <p>Total of exercises {Total}</p>
  </div>
)

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
    }
  ]
  

  return (
    <div>
      <Course course={course} parts={parts}  />
    </div>
  )
}

export default App

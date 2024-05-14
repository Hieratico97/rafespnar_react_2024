import React from "react";






  
const Course = ({courses})=> {
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
  const Courses = courses.map((course,index)=>
    <div key={index}>
    <Header course={course.name}/>
    <Content key={index} parts={course.parts}/>
    </div>
    
  )
return(
   <div >
    {Courses}
  </div>
)

}
  export default Course
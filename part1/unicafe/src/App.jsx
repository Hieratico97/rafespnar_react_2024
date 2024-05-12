import { useState } from 'react'
const Header = ({text})=> <h1>{text}</h1>
const Button = (props) =>  (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
  const StatisticLine = ({ text, value }) => {
    if (text === "good") {
      return <><td>{text}</td><td> {value}</td></>
    }
    if (text === "neutral") {
      return <><td>{text}</td><td> {value}</td></>
    }
    if (text === "bad") {
      return <><td>{text}</td><td> {value}</td></>
    }
    if (text === "all") {
      return <><td>{text}</td><td> {value}</td></>
    }
    if (text === "average") {
      return <><td>{text}</td><td> {value}</td></>
    }
    if (text === "positive") {
      return <><td>{text}</td><td> {value}%</td></>
    }
}
    
   
  
  
const Statistics = ({good, neutral, bad}) => {
const sum = good + neutral + bad
const average = ((good -bad )/sum).toFixed(2)
const positive = ((good/sum)*100).toFixed(2)
if (good===0 && neutral===0 && bad===0) {
  return(
    <div>
  <h1>Statistics</h1>
  <p>No feedback given</p>
  </div>
  
)
}
else {
    return (
      <table>
          <tbody>
          <tr><StatisticLine text="good" value={good} /></tr>
            <tr><StatisticLine text="neutral" value={neutral} /></tr>
            <tr><StatisticLine text="bad" value={bad} /></tr>
            <tr><StatisticLine text="all" value={sum} /></tr>
            <tr><StatisticLine text="average" value={average} /></tr>
            <tr><StatisticLine text="positive" value={positive} /></tr>
       </tbody>
      </table>
   
  )


}

}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const text = "give feedback"
  
  return (
    <div>
      <Header text ={text}/>
      <Button handleClick={()=>setGood(good +1)} text="good"/>
      <Button handleClick={()=>setNeutral(neutral +1)} text="neutral"/>
      <Button handleClick={()=>setBad(bad +1)} text="bad"/>
      
      <Statistics good ={good} neutral= {neutral} bad = {bad}/>
      
      
    </div>
  )
}

export default App
import { useState } from 'react'
const Header = ({text})=> <h1>{text}</h1>
const Button = (props) =>  (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
const Counter = ({text,counter})=> <p>{text} {counter}</p>
const Statistics = ({good, neutral, bad}) => {
const sum = good + neutral + bad
const average = (good -bad )/sum
const positive = (good/sum)*100
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
      <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {sum}</p> 
      <p>average {average}</p>
      <p>positive {positive}%</p>
      </div>
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
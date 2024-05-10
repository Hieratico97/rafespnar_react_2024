import { useState } from 'react'
const Header = ({text})=> <h1>{text}</h1>
const Button = (props) =>  (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
const Counter = ({text,counter})=> <p>{text} {counter}</p>



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
      <Header text='Statistics'/>
      <Counter text='good' counter={good}/>
      <Counter text='neutral' counter={neutral}/>
      <Counter text='bad' counter={bad}/>
      
    </div>
  )
}

export default App
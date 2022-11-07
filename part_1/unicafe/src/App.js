/*
 * @since: 2022-11-07 11:52:57
 * @lastTime: 2022-11-07 15:14:40
 * @文件相对于项目的路径: \fullstackopen\part_1\unicafe\src\App.js
 * @message: 
 */
import { useState } from 'react'
const Button = ({ handleClick, btnText}) => {
  return (
    <div>
      <button onClick={handleClick}>{btnText}</button>
    </div>
  )
}
const Title = () => {
  return (
    <h1 >give feedback</h1>
  )
}
const Statistics  = ({title,name,sum, value}) => {
  if(sum === 0 && title === true) {
    return (
      <div>no feedback given</div>
    )
  }
  if(sum === 0 ) {
    return (
      <div></div>
    )
  }
  return (
    <div>{name} {value}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleClickGoood = () => {
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <Title />
      <Button btnText='good'  handleClick={handleClickGoood} />
      <Button btnText='neutral' handleClick={handleClickNeutral} />
      <Button btnText='bad' handleClick={handleClickBad} />
      <Statistics title={true}  sum={good + neutral + bad} />
      <Statistics name='good' value={good} sum={good + neutral + bad} />
      <Statistics name='neutral' value={neutral} sum={good + neutral + bad} />
      <Statistics name='bad' value={bad} sum={good + neutral + bad} />
      <Statistics name='all' value={good + neutral + bad} sum={good + neutral + bad} />
      <Statistics name='average' value={(good * 1 + neutral * 0 + bad * -1)  / (good + neutral + bad)} sum={good + neutral + bad} />
      <Statistics name='positive' value={good  / (good + neutral + bad) * 100 + '%'} sum={good + neutral + bad} />
    </div>
  )
}

export default App

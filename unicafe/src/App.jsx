import { useState } from "react";

const Button = ({text, clickHandler}) => {
  return (
    <>
      <button onClick={clickHandler}>
        {text}
      </button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({all, good, neutral, bad}) => {
  if (all === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  const positive = `${(good / all) * 100} %`

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='All' value={all} />
        <StatisticLine text='Averge' value={average} />
        <StatisticLine text='Positive' value={positive} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGoodHandler = () => setGood(good + 1)
  const clickNeutralHandler = () => setNeutral(neutral + 1)
  const clickBadHandler = () => setBad(bad + 1)
  const all = good + bad + neutral


  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='Good' clickHandler={clickGoodHandler} />
      <Button text='Neutral' clickHandler={clickNeutralHandler} />
      <Button text='Bad' clickHandler={clickBadHandler} />
      <Statistics all={all} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

//Kohta 1.11
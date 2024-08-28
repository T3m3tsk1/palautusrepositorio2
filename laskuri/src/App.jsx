import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const inceaseByOne = () => {
    console.log('increasing value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting value to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button
        text={'plus'}
        handleClick={inceaseByOne} 
      />
      <Button
        text={'zero'}
        handleClick={setToZero}
      />
      <Button
        text={'minus'}
        handleClick={decreaseByOne}
      />
    </div>
  )
}

export default App
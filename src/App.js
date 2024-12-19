import './App.css';
import {useState} from 'react'

function App() {
  const [value, setValue] = useState(0)
  const [operator, setOperator] = useState(false)

  const onClickNumbers = (newValue) => {
    setOperator(false)

    if (value === 0) {
      setValue(newValue)
    } else {
      const numbers = value + '' + newValue
      setValue(numbers)
    }
  }

  const onClickOperator = (newOperator) => {
    if (operator == false) {
      const newNumberOperator = value + newOperator
      setValue(newNumberOperator)
    }

    setOperator(true)
  }

  const onClickClear = () => {
    setValue(0)
  }

  const onClickResult = () => {
    const result = eval(value)
    setValue(result)
  }

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{value}</div>
        <div className="buttons">
          <div className="row">
            <button className="btn" onClick={() => onClickNumbers(7)}>7</button>
            <button className="btn" onClick={() => onClickNumbers(8)}>8</button>
            <button className="btn" onClick={() => onClickNumbers(9)}>9</button>
            <button className="btn operator" onClick={() => onClickOperator('/')}>/</button>
          </div>
          <div className="row">
            <button className="btn" onClick={() => onClickNumbers(4)}>4</button>
            <button className="btn" onClick={() => onClickNumbers(5)}>5</button>
            <button className="btn" onClick={() => onClickNumbers(6)}>6</button>
            <button className="btn operator" onClick={() => onClickOperator('*')}>*</button>
          </div>
          <div className="row">
            <button className="btn" onClick={() => onClickNumbers(1)}>1</button>
            <button className="btn" onClick={() => onClickNumbers(2)}>2</button>
            <button className="btn" onClick={() => onClickNumbers(3)}>3</button>
            <button className="btn operator" onClick={() => onClickOperator('-')}>-</button>
          </div>
          <div className="row">
            <button className="btn" onClick={() => onClickNumbers(0)}>0</button>
            <button className="btn" onClick={() => onClickNumbers('.')}>.</button>
            <button className="btn" onClick={onClickResult}>=</button>
            <button className="btn operator" onClick={() => onClickOperator('+')}>+</button>
          </div>
          <div className="row">
            <button className="btn clear" onClick={onClickClear} >C</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

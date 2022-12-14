import "./styles.css";
import { React, useState } from 'react';
import evaluateString from "./calculate";

const ops = ['/', '*', '+', '-', '.'];

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  
  const updateCalc = value => {
    if(
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    if(result.slice(-1) === '='){
      setCalc(value)
      setResult('')
    } else {
      setCalc(calc + value)

      if(!ops.includes(value)) {
        setResult(evaluateString(calc + value).toString())
      }
    }
  }

  const calculate = () => {
    console.log(calc)
    setResult(calc+'=')
    setCalc(evaluateString(calc).toString())
    
  }

  const deleteLast = () => {
    if(calc === '') {
      return;
    }

  const value = calc.slice(0, -1);
  
  setCalc(value)
 
    setResult(evaluateString(value).toString())
  }

  const clear = () => {
    setCalc('')
    setResult('')
  }

  const buttonGrid = ['/','1','2','3','*','4','5','6','+','7','8','9','-','.','0']

  return (
    <div className='calculator-grid'>
      <div className="output">
          <div className="previous-operand">{ result || '' }</div>
          <div className="current-operand">{ calc || '0' }</div>
      </div>
      <button className="span-two" onClick={() => clear()}>AC</button>
      
      <button onClick={() => deleteLast()}>DEL </button>
      {buttonGrid.map((button) => (
        <button key={button} onClick={() => updateCalc(button)}>{button}</button>
        )
      )}
      
      <button className="span-two" onClick={calculate}>=</button>
    </div>
  )
}

export default App;

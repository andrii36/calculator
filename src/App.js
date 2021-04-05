import { useState } from 'react';
import styles from './App.module.css';

function App() {

  let [numberToCount1, setNumberToCount1] = useState("");
  let [numberToCount2, setNumberToCount2] = useState("");
  let [mode, setMode] = useState("");
  let [result, setResult] = useState("")

  let numClick = (val) => {
    !mode && setNumberToCount1(numberToCount1 + val.currentTarget.innerText)
    mode == "+" && setNumberToCount2(numberToCount2 + val.currentTarget.innerText)
    mode == "÷" && setNumberToCount2(numberToCount2 + val.currentTarget.innerText)
    mode == "×" && setNumberToCount2(numberToCount2 + val.currentTarget.innerText)
    mode == "-" && setNumberToCount2(numberToCount2 + val.currentTarget.innerText)
  }
  let operationClick = (val) => {
    !numberToCount1 ? setMode("") : setMode(val.currentTarget.innerText)
    setNumberToCount2("")
  }
  let res = () => {
    let num1 = Number(numberToCount1)
    let num2 = Number(numberToCount2)
    let add = () => num1 + num2
    let minus = () => num1 - num2
    let div = () => num1 / num2
    let mult = () => num1 * num2

    mode == "+" && setResult(add)
    mode == "-" && setResult(minus)
    mode == "÷" && setResult(div)
    mode == "×" && setResult(mult)

    setNumberToCount1(mode == "+" && add
    || mode == "-" && minus
    || mode == "÷" && div
    || mode == "×" && mult)
  }
  let reset = () => {
    setNumberToCount1("")
    setNumberToCount2("")
    setMode("")
    setResult("")
  }
  
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.reset}><button onClick={reset}>A/C</button></div>
        {result
        ? <div className={styles.result}>{result ? result : ""}</div>
        : <div className={styles.typedNumbers}>{numberToCount1 + mode + numberToCount2}</div>}
        <div><button onClick={numClick}>7</button></div>
        <div><button onClick={numClick}>8</button></div>
        <div><button onClick={numClick}>9</button></div>
        <div><button onClick={operationClick}>÷</button></div>
        <div><button onClick={numClick}>4</button></div>
        <div><button onClick={numClick}>5</button></div>
        <div><button onClick={numClick}>6</button></div>
        <div><button onClick={operationClick}>×</button></div>
        <div><button onClick={numClick}>1</button></div>
        <div><button onClick={numClick}>2</button></div>
        <div><button onClick={numClick}>3</button></div>
        <div><button onClick={operationClick}>-</button></div>
        <div><button onClick={numClick}>.</button></div>
        <div><button onClick={numClick}>0</button></div>
        <div><button onClick={res}>=</button></div>
        <div><button onClick={operationClick}>+</button></div>
      </div>
    </div>
  );
}

export default App;

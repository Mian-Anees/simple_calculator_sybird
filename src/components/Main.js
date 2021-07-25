import KeyPad from './KeyPad';
import React,{useState} from 'react';
import Result from './Result';
/* eslint no-eval: 0 */
const Main = () => {
  const [result,setResult] = useState("");
  const onClick = button => {

    if(button === "="){
        calculate()
    }

    else if(button === "C"){
        reset()
    }
    else if(button === "CE"){
        backspace()
    }

    else {
        setResult(result + button)
    }
};
const calculate = () => {
  const checkResult = result.includes('--') ? result.replace('--','+') : result
  try {
      const evaluatedResult = eval(checkResult);
      setResult(`${evaluatedResult}`);
  } catch (e) {
      setResult("error")
  }
};

const reset = () => {
  setResult("")
};

const backspace = () => {
    let temp = result;
    temp = temp.slice(0, - 1)
        setResult(temp);
};
  return (
      <div className="max-w-screen-sm w-1/4 m-auto">
        <h1 className="text-3xl font-bold mb-8">Simple Calculator</h1>
        <Result result={result}/>
        <KeyPad onClick={onClick}/>
        </div>
  );
}

export default Main;

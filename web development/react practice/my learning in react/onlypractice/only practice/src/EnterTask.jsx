import {useState} from 'react';
import ViewTask, { valuePass } from './ViewTask';

const EnterTaskFun = () => {
  const [inputValue, SetInputValue] = useState("")

  const ClickEvent = () => {
    console.log("button is clicked")
    console.log(inputValue)
    console.log("task added")
    valuePass(inputValue)
  }



  return(
    <>
    <h1>Enter your task</h1>
    <input onChange={(e) => SetInputValue(e.target.value)} id='inputValue'></input><br></br>
    <button onClick = {ClickEvent}>submit</button>
    </>
  );
}




export {EnterTaskFun}

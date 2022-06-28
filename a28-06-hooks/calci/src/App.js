import React, {useState } from "react";
import './App.css';

function App() {
 
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [oper,setOper]=useState();
    const [res,setRes]=useState(0);
   
    function handleChange(e)
    {
      setNum1(e.target.value);
    }
    function handleChange2(e)
    {
      setNum2(e.target.value);
    }
    function handleSelect(e) {
      setOper(e.target.value);
     }
      
     function calculate() 
     {
      let ans 
      if (oper === "+") 
      {
      ans = Number(num1) + Number(num2);
      return ans;
      } 
      else if (oper === "-") 
      {
      ans = Number(num1) - Number(num2);
      return ans;
      }
      else if (oper === "*") 
      {
      ans = Number(num1) * Number(num2);
      return ans;
      }
      setRes(ans);
    }
    return (
        <div>
            <input type="number" value={num1} 
            onChange={(e)=> handleChange(e)}/>
            <input type="number" value={num2}
            onChange={(e)=> handleChange2(e)}/>
            <select name="operator" onChange={(e) => handleSelect(e)}>
              <option value="Add">+</option>
              <option value="">-</option>
              <option value="">*</option>
              <option value="">/</option>
            </select>
            <button type="submit" onClick={calculate}>Result</button>
            <h1>result is {res} </h1>
        </div>
  );
}

export default App;

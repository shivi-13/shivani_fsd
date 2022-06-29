import React, {useState } from "react";
import './App.css';

function App() {
 
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [oper,setOper]=useState();
    const [res,setRes]=useState();
   
    function handleChange(e, num1)
    {
      setNum1(e.target.value);
    }
    
    function handleChange2(e, num2)
    {
      setNum2(e.target.value);
    }
   
    function handleSelect(e) 
    {
      setOper(e.target.value);
    }
      
     function calcuLate() 
     {
      let ans=0;
      if (oper === '+') 
      {
      ans = Number(num1) + Number(num2);
      return ans;
      } 
      else if (oper === '-') 
      {
      ans = Number(num1) - Number(num2);
      return ans;
      }
      else if (oper === '*') 
      {
      ans = Number(num1) * Number(num2);
      return ans;
      }
      setRes(ans);
    }
    return (
        <div>
            <input type="number"
            value={num1} 
            onChange={(e)=> handleChange(e, num1)}/>
            
            <input type="number" 
            value={num2}
            onChange={(e)=> handleChange2(e, num2)}/>
           
            <select name="operator" onChange={(e) => handleSelect(e)}>
              <option value="Add">+</option>
              <option value="Subs">-</option>
              <option value="Multi">*</option>
              <option value="Div">/</option>
            </select>
            
            <button type="submit" onClick={calcuLate}>Result</button>
            
            <h1>Result is {res} </h1>
        </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { set } from 'mongoose';
const Main = () => {
  const [num , setNum] = useState(0)
  const incNum = ()  =>{
    setNum(num+1);
  }
  const decnum = () =>{
  setNum(num-1);
  }
 
  return(
   <>
   <div className='mainclass'>
    {/* <form>
      <label for='variablename'>Variable name: </label> 
       <input type='text' id='variablenameget' name='variablenameinput' value='xyz'></input>

    </form> */}
     <div className='centerdiv'>
       <div className='h1tag'><h1> {num} </h1></div>
       </div>
        <div className='betweenbutton'>
          <button className='inc' onClick={incNum}>Increment</button>
          <button className= 'dec' onClick={decnum}>Decrement</button>
        </div>
     </div>
   </>
  )
}
export default Main;
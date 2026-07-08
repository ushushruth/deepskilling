import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  const [amount,setAmount]=useState(0);
  const [currency,setCurrency]=useState(0);
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }
  function hello(){
    alert(`Hello Member${count+1}!!`);
  }
  function handleIncrement(){
    increment();
    hello();
  }
  function welcome(){
    alert("welcome");
  }
  function clicked(){
    alert("I clicked!");
  }
  function handleSubmit(e){
    e.preventDefault();
    if(currency=="euro"){
      alert(amount*109);
    }
    else if(currency=="dollar"){
      alert(amount*95.25);
    }


  }

  return (
    <root>
   <div>
    <h2>
      {count}
    </h2>
    <button 
      onClick={handleIncrement}
      >INCREMENT</button>
      <br/>
      <button
      onClick={decrement}>DECREMENT</button>
      <br/>
      <button
      onClick={welcome}>
        Say Welcome
        </button>
        <br/>

        <button 
          onClick={clicked}
          >Click Me</button>
   </div>
   <div>
    <h2 style={{color:'green'}}>Currency Converter!!!</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Amount
        <input 
        name="amount"
        value={amount}
        type="number"
        onChange={(e)=> setAmount(e.target.value)}>

        </input>
      </label>
      <br/>
      <br/>
      <label >
        Currency
        <input 
        name="currency"
        type="text"
        value={currency}
        onChange={(e)=>setCurrency(e.target.value)}>
        </input>
      </label>
      <br/>
      <button type='submit'>
        submit
      </button>
    </form>
  





    </div>
   
 
   </root>

  );
}

export default App;

import './App.css';
import { useState } from "react";


// ---FUNCIONS---


// Display Function
function Display({ display }) {
  return(
    <>{display}</>
  );
}

// Key Function
function Key({label, onClick, className}) {
  return (
    <button onClick={onClick} className={className}>
        {label}
    </button>
  );
}

// App Function
function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);
  const [isNum2, setIsNum2] = useState(false);

// Number Click Handler
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (!isNum2) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
  };

// Operations Click Handler
  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (num1 !== null) {
      setOp(value);
      setIsNum2(true);
      setDisp(value);
    }
  };

// Equal Click Handler
  const eqClickHandler = (e) => {
    e.preventDefault();
    if (num1 !== null && num2 !== null && op !== null) {
      let result = null;
      if (op === "+") {
        result = parseInt(num1) + parseInt(num2);
      } else if (op === "-") {
        result = parseInt(num1) - parseInt(num2);
      } else if (op === "*") {
        result = parseInt(num1) * parseInt(num2);
      } else if (op === "÷") {
        result = parseInt(num1) / parseInt(num2);
      } else {
        result = "ERROR";
    }
    
    setDisp(result);
    setNum1(result);
    setNum2(null);
    setOp(null);
    setIsNum2(false);
  }
};

// Clear Click Handler
  const clrClickHandler = (e) => {
    e.preventDefault();
      setDisp(0);
      setNum1(null);
      setNum2(null);
      setOp(null);
      setIsNum2(false);  
};

// Name Click Handler
  const nameClickHandler = () => {
    setDisp("Nathaniel Manansala")
  };


// ---RETURN---


return (
  <div className="App">

    {/* Header */}
    <div className="Header">
      Calculator of Nathaniel Manansala - IT3A
    </div>

    {/* Calculator */}
    <div className="Calc">

      {/* Calculator Display */}
      <div className="Disp">
        <Display display={disp} />
      </div>
      
      {/* Calculator Key Buttons */}
      <div className="Buttons">
        <Key label={7} onClick={numClickHandler}/>
        <Key label={8} onClick={numClickHandler}/>
        <Key label={9} onClick={numClickHandler}/>
        <Key label={"÷"} onClick={opClickHandler} className="Operators"/>
        <Key label={4} onClick={numClickHandler}/>
        <Key label={5} onClick={numClickHandler}/>
        <Key label={6} onClick={numClickHandler}/>
        <Key label={"*"} onClick={opClickHandler} className="Operators"/>
        <Key label={1} onClick={numClickHandler}/>
        <Key label={2} onClick={numClickHandler}/>
        <Key label={3} onClick={numClickHandler}/>
        <Key label={"-"} onClick={opClickHandler} className="Operators"/>
        <Key label={"C"} onClick={clrClickHandler} className="Clear"/>
        <Key label={0} onClick={numClickHandler}/>
        <Key label={"="} onClick={eqClickHandler}/>
        <Key label={"+"} onClick={opClickHandler} className="Operators"/>
      </div>

      {/* Name Button */}
      <div className="nameButton">
        <Key label = {'Manansala'} onClick={nameClickHandler}/>
      </div>
    </div>
  </div>
);

}

export default App;

import './App.css';

function Display() {
  return(
    <>0</>
  );
}

function Key({label, onClick}) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}



function App() {

  const clickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
  }

  return (
    <div className="App">
      <div className="Calc">
        <div className="Display">
          <Display />
        </div>
        <div className="Buttons">
          <Key label={7} onClick={clickHandler}/>
          <Key label={8} onClick={clickHandler}/>
          <Key label={9} onClick={clickHandler}/>
          <Key label={"÷"} onClick={clickHandler}/>
          <Key label={4} onClick={clickHandler}/>
          <Key label={5} onClick={clickHandler}/>
          <Key label={6} onClick={clickHandler}/>
          <Key label={"×"} onClick={clickHandler}/>
          <Key label={1} onClick={clickHandler}/>
          <Key label={2} onClick={clickHandler}/>
          <Key label={3} onClick={clickHandler}/>
          <Key label={"-"} onClick={clickHandler}/>
          <Key label={"CLR"} onClick={clickHandler}/>
          <Key label={0} onClick={clickHandler}/>
          <Key label={"="} onClick={clickHandler}/>
          <Key label={"+"} onClick={clickHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;

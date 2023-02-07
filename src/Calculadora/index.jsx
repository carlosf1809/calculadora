import React, { useState } from "react";
import './index.css';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (event) => {
    setInput(input + event.target.value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="containerCalculator">
      <input type="text" value={input} />
      <br />
      <br />
      <button  onClick={() => {setInput("")}}>
        C
      </button>
      <button value="1" onClick={handleClick}>
        1
      </button>
      <button value="2" onClick={handleClick}>
        2
      </button>
      <button value="3" onClick={handleClick}>
        3
      </button>
      <button value="+" onClick={handleClick}>
        +
      </button>
      <br />
      <button value="4" onClick={handleClick}>
        4
      </button>
      <button value="5" onClick={handleClick}>
        5
      </button>
      <button value="6" onClick={handleClick}>
        6
      </button>
      <button value="-" onClick={handleClick}>
        -
      </button>
      <br />
      <button value="7" onClick={handleClick}>
        7
      </button>
      <button value="8" onClick={handleClick}>
        8
      </button>
      <button value="9" onClick={handleClick}>
        9
      </button>
      <button value="*" onClick={handleClick}>
        *
      </button>
      <br />
      <button value="." onClick={handleClick}>
        .
      </button>
      <button value="0" onClick={handleClick}>
        0
      </button>
      <button value="=" onClick={calculate}>
        =
      </button>
      <button value="/" onClick={handleClick}>
        /
      </button>
      <br />
    </div>
  );
};

export default Calculator;

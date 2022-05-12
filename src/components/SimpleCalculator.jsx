import React, { useState, useEffect } from 'react';
import './styles.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

function SimpleCalculator() {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var operationChar = ["-", "+", "x", "=", "/", "C"];
  const [display, setDisplay] = useState("");
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [result, setResult] = useState(0);

  function operation(operand) {
    if (operand1 === null) {
      setOperand1(operand);
    } else {
      setOperand2(operand);
    }
  }

  
  



  return (
    <div className="app">
      <div className="time">
        {display}
      </div>
      <div className="mt-2 col-md-12">
        <div className="row">
          <button className={`button button-primary button-primary-active`} onClick={() => {setDisplay(display + numbers[7]); operation}}>
            {numbers[7]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + numbers[8])}>
            {numbers[8]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + numbers[9])}>
            {numbers[9]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + operationChar[0])}>
            {operationChar[0]}
          </button>
        </div>
      </div>
      <div className="mt-2 col-md-12">
        <div className="row">
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + numbers[4])}>
            {numbers[4]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + numbers[5])}>
            {numbers[5]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + numbers[6])}>
            {numbers[6]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + operationChar[1])}>
            {operationChar[1]}
          </button>
        </div>
      </div>
      <div className="mt-2 col-md-12">
        <div className="row">
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + numbers[1])}>
            {numbers[1]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + numbers[2])}>
            {numbers[2]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + numbers[3])}>
            {numbers[3]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + operationChar[2])}>
            {operationChar[2]}
          </button>
        </div>
      </div>
      <div className="mt-2 col-md-12">
        <div className="row">
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay("")}>
            {operationChar[5]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + numbers[0])}>
            {numbers[0]}
          </button>
          <button className={`button button-primary button-primary-active`} >
            {operationChar[3]}
          </button>
          <button className={`button button-primary button-primary-active`} onClick={() => setDisplay(display + operationChar[4])}>
            {operationChar[4]}
          </button>
        </div>
      </div>



    </div>
  );
};

export default SimpleCalculator;
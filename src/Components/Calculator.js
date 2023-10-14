import React, { useEffect, useState } from "react";
import "./Calculator.css";
import Button from "./Button";

export default function Calculator() {
    const [cals , setCals] = useState("123");

    const updateCal = (s)=>{
        setCals(s);
        console.log(s)
    }

    useEffect(()=>{

    },[cals])

  return (
    <div className="container">
      <div className="output my-3">
        <textarea
          className="form-control textarea"
          id="exampleFormControlTextarea1"
          rows="3"
          value={cals}
          style={{fontSize : '50px'}}
        ></textarea>
      </div>
      <div className="d-flex justify-content-around my-3">
        <Button cals={cals} color="danger"  symbol="clear_all"  updateCal={updateCal} />
        <Button cals={cals} color="warning" symbol="keyboard_backspace" updateCal={updateCal}/>
        <Button cals={cals} color="success" symbol="percent" updateCal={updateCal}/>
        <Button cals={cals} color="success" symbol="safety_divider" updateCal={updateCal}/>
      </div>
      <div className="d-flex justify-content-around my-3">
        <Button cals={cals} color="warning" symbol="" num={7} updateCal={updateCal}/>
        <Button cals={cals} color="warning" symbol="" num={8} updateCal={updateCal}/>
        <Button cals={cals} color="warning" symbol="" num={9} updateCal={updateCal}/>
        <Button cals={cals} color="success" symbol="close" updateCal={updateCal}/>
      </div>
      <div className="d-flex justify-content-around my-3">
        <Button cals={cals} color="warning" symbol="" num={4} updateCal={updateCal}/>
        <Button cals={cals} color="warning" symbol="" num={5} updateCal={updateCal}/>
        <Button cals={cals} color="warning" symbol="" num={6} updateCal={updateCal}/>
        <Button cals={cals} color="success" symbol="remove" updateCal={updateCal}/>
      </div>
      <div className="d-flex justify-content-around my-3">
        <Button cals={cals} color="warning" symbol="" num={1} updateCal={updateCal}/>
        <Button cals={cals} color="warning" symbol="" num={2} updateCal={updateCal}/>
        <Button cals={cals} color="warning" symbol="" num={3} updateCal={updateCal}/>
        <Button cals={cals} color="success" symbol="add" updateCal={updateCal}/>
      </div>
      <div className="d-flex justify-content-around my-3">
        <Button cals={cals} color="danger" symbol="crop_rotate" updateCal={updateCal}/>
        <Button cals={cals} color="warning" symbol="" num={0} updateCal={updateCal}/>
        <Button cals={cals} color="success" symbol="adjust" updateCal={updateCal}/>
        <Button cals={cals} color="success" symbol="equal" updateCal={updateCal}/>
      </div>
    </div>
  );
}

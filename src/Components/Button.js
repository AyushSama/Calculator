import React from "react";
import "./Button.css";

export default function Button(props) {

  const handleOnClick = ()=>{
    if(props.symbol=='clear_all'){
      props.updateCal("");
    }
    else if(props.symbol=='keyboard_backspace'){
      props.updateCal(props.cals.slice(0, -1))
    }
    else if(props.symbol=='percent'){
      props.updateCal(props.cals+'%')
    }
    else if(props.symbol=='safety_divider'){
      props.updateCal(props.cals+'/')
    }
    else if(props.symbol==''){
      props.updateCal(props.cals+props.num)
    }
    else if(props.symbol=='close'){
      props.updateCal(props.cals+'*')
    }
    else if(props.symbol=='remove'){
      props.updateCal(props.cals+'-')
    }
    else if(props.symbol=='add'){
      props.updateCal(props.cals+'+')
    }
    else if(props.symbol=='equal'){
        props.updateCal(Function(`'use strict'; return (${props.cals})`));
    }
  }

  return (
    <div id="container">
      <button class={`button btn-${props.color}`} id="button-4" onClick={handleOnClick}>
        <div id="underline"></div>
          <span class="material-symbols-outlined">{props.symbol?props.symbol:props.num}</span>
      </button>
    </div>
  );
}

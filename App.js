import React from "react";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import {increment,decrement} from "./Components/Action/index"
function App() {
  const myState= useSelector((state)=>state.changeNumber);
const dispatch =useDispatch();
  return (
    <> 
      <div className="container">
        <h1>Start to Learn Redux</h1>
        <h4>Start Increment and Decrement</h4>
        <div className="quantity">
          <a className="quantity__minus" title="Decrement"
          onClick={()=>dispatch(decrement())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
          ></input>
          <a className="quantity__plus" title="Increment"
          onClick={()=>dispatch(increment(5))}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

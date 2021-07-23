import './App.css';
import SimpleCalculator from './SimpleCalculator'
import Calculator from './Calculator'
import {useState,useEffect} from "react";

function App() {
// const [count,setCount]=useState(0);
// useEffect(() => {
// 	document.getElementById("pp").value = `${count} kere tıkladınız`;
// });
return (
<div className="App">  
<Calculator/>
</div>
);

}

export default App;

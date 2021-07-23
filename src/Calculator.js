import React,{useState}  from "react";
import { Row, Col } from 'reactstrap';
import './App.css'; 
 
export default function Calculator(){ 
const [history,setHistory]=useState("");
const [result, setResult] = useState('');  
var characters=result.split("");   

function History(process) { 
<History props={process}/> 
}

function calcu(result) {
console.log(result);
if (characters.includes("+")) {
var temp_arr=result.split("+");
const arrInt = temp_arr.map(el => parseInt(el)); 
console.log(arrInt); 
setResult(result+"="+(arrInt[0]+arrInt[1])); 
History(result);
}  
if (characters.includes("-")) {
var temp_arr=result.split("-");
const arrInt = temp_arr.map(el => parseInt(el)); 
console.log(arrInt); 
setResult(result+"="+(arrInt[0]-arrInt[1])); 
History(result);
}  
if (characters.includes("/")) {
var temp_arr=result.split("/");
const arrInt = temp_arr.map(el => parseInt(el)); 
console.log(arrInt); 
setResult(result+"="+(arrInt[0]/arrInt[1])); 
History(result);
}  
if (characters.includes("*")) {
var temp_arr=result.split("*");
const arrInt = temp_arr.map(el => parseInt(el)); 
console.log(arrInt); 
setResult(result+"="+(arrInt[0]*arrInt[1]));  
History(result);
}  
} 
function singleOp(props) { 
if (!characters.includes('+') && !characters.includes("-") && !characters.includes("*") && !characters.includes("/")) {
setResult(result+props.value);
}
}

return(
<div> 
<Show/>  
<Reset value=""/>     
<Row className="justify-content-md-center" xs="auto"> 
<Col style={{ backgroundColor: '#C9E4C5'}}  md="0.1">
<Numbers value="1"/> 
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}}  md="0.1">
<Numbers value="2"/> 
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1">
<Numbers value="3"/> 
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1">
<Process value="+"/>
</Col>
</Row>  
<Row className="justify-content-md-center" xs="auto">

<Col style={{ backgroundColor: '#C9E4C5'}}  md="0.1">
<Numbers value="4"/>
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}}  md="0.1">
<Numbers value="5"/> 
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1">
<Numbers value="6"/> 
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1">
<Process value="-"/>
</Col> 

</Row>  
<Row className="justify-content-md-center" xs="auto">

<Col style={{ backgroundColor: '#C9E4C5'}}  md="0.1">
<Numbers value="7"/> 
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}}  md="0.1">
<Numbers value="8"/>
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1">
<Numbers value="9"/>
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1"> 
<Process  value="/"/>
</Col>
</Row>  
<Row className="justify-content-md-center" xs="auto">
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1">
<Numbers value="0"/> 
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1">
<Numbers value="."/> 
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1">
<Calcu value="="/>
</Col>
<Col style={{ backgroundColor: '#C9E4C5'}} md="0.1">
<Process value="*"/>
</Col>
</Row>
</div>
);

//ekran
function Show(){
return(
<div > 
<h1>{result}</h1> 
<h4 style={{opacity:0.5}}>History Calculator</h4>
<h3>{history}</h3>
</div>	
)};

//sıfırlama
function Reset () {
return(
<div>
<button style={{backgroundColor:'rosybrown'}} onClick={()=>setResult("")}>Reset</button> 
</div>
);
}

//geçmiş
function History (props) {
{setHistory(<h4>{history}{props}</h4>)}
return(
<div>  
{/* <h4>{history}</h4>  */}
</div>
);
}
//Hesap
function Calcu(props){
return(<div> 
<button style={{backgroundColor:'#C9E4C5',border:"0"}} key={props.value} onClick={()=>calcu(result)}>{props.value}</button> 
</div>)
};

//Sayılar
function Numbers(props){return(
<div>
<button style={{backgroundColor:'#C9E4C5',border:"0"}} key={props.value} onClick={()=>setResult(result+props.value)}>{props.value}</button> 
</div>
);}  

//işlemler
function Process( props) {     
return(
<div>
<button style={{backgroundColor:'#C9E4C5',border:"0"}} key={props.value} onClick={()=>singleOp(props)}>{props.value}</button> 
</div>
);
} 
}
import React,{useState} from 'react'
function App(){
//const nameStateVariable=useState("saurav")
// const name = nameStateVariable[0];
// const setName = nameStateVariable[1];
const[name, setName]= useState('saurav')
const [roll, setRoll]= useState(101)
const handleClick=()=>{
    setName("tanwar");
    setRoll(105);
};

    return(
    <React.Fragment>
        <h1>name:{name}</h1>
        <h2>roll:{roll}</h2>
        <button type="button" onClick={handleClick}>change</button>
    </React.Fragment>)
}
export default App;
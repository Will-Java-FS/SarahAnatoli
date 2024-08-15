import { useState } from "react";

//export default function Square(props: {value: number}){
export default function Square(props: {value:any, onSquareClick:any}){
    //let x:string='';
    //const [value, setValue] = useState(x);

    //function handleClick(){
    //    console.log('clicked');
    //    x='x';
    //    setValue(x);
    //}

    return <button className="Square" onClick={props.onSquareClick}>{props.value}</button>;
}
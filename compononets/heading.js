import { useEffect, useState } from "react";

export default function Heading (){

    const [state, setState] = useState("");

    useEffect (() => {
        setState(window.localStorage.getItem("title")|| "Just write anything ...");
    }, []);

    return (
        <h1><div 
        onInput={(e) => 
            window.localStorage.setItem("title", e.currentTarget.textContent)}
        className="heading" contentEditable="true" >
            {state}
        </div></h1>
    )

    
}
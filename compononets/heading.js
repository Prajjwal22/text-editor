import { useEffect, useState } from "react";

export default function Heading (){

    const [state, setState] = useState("");
    const defaultHeading = "Just write heading ..."


    useEffect (() => {
        setState(window.localStorage.getItem("title") || defaultHeading);
    }, []);

    return (
        <h1><div 
        onInput={(e) => 
            window.localStorage.setItem("title", e.currentTarget.textContent)}
        onFocus={(e) => {
                if(e.currentTarget.textContent==defaultHeading)
                    e.currentTarget.textContent='';
            }}
        onBlur={(e) => {
                if(e.currentTarget.textContent=='')
                    e.currentTarget.textContent=defaultHeading;
            }}
        className="heading" contentEditable="true" >
            {state}
        </div></h1>
    )

    
}
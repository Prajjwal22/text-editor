import { useEffect, useState } from "react";


export default function TextArea () {
    const [content, setContent] = useState("");
    const defaultValue = "Just write anything ..."


useEffect (() => {
    setContent(window.localStorage.getItem("content")|| defaultValue);
}, []);

return (

    <div>
    <div 
    onInput={(e) => 
        window.localStorage.setItem("content", e.currentTarget.textContent)
    }
    onFocus={(e) => {
        if(e.currentTarget.textContent==defaultValue)
            e.currentTarget.textContent='';
    }}
    onBlur={(e) => {
        if(e.currentTarget.textContent=='')
            e.currentTarget.textContent=defaultValue;
    }}
   
    className="content" contentEditable="true">
        {content} 
    </div>  
    </div>

)

}
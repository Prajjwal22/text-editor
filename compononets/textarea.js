import { useEffect, useState } from "react";


export default function TextArea () {

    const [content, setContent] = useState("");

useEffect (() => {
    setContent(window.localStorage.getItem("content")|| "Just write anything ...");
}, []);

return (
    <div 
    onInput={(e) => 
        window.localStorage.setItem("content", e.currentTarget.textContent)}
    className="content" contentEditable="true" >
        {content} 
    </div>  
)

}
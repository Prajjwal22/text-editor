import { useEffect, useState } from "react";


export default function TextArea (props) {
    const [content, setContent] = useState("");
    const defaultValue = "Just write anything..."

useEffect (() => {
    setContent(window.localStorage.getItem("content")|| defaultValue);
}, []);

return (

    <div>
    <textarea 
    onInput={(e) => 
        window.localStorage.setItem("content", e.target.value)
    }
    onFocus={(e) => {
        if(e.target.value==defaultValue)
            e.target.value='';
    }}
    onBlur={(e) => {
        if(e.target.value=='')
            e.target.value=defaultValue;
    }}

    onChange={(e) => {
        setContent(e.target.value)
    }}
   
    className="container" value={content}>
    </textarea> 

    <div>
        <p> You Text Summary: {content.trim().split(" ").length} words &amp; {content.length} characters</p>
    </div>

    </div>

)

}
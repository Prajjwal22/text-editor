import { useEffect, useState } from "react";
import ClearData from "./cleardata";


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

    <div className="details">
        <p> You Text Summary: {content.trim().split(" ").length} words &amp; {content.length} characters</p>
<button className="button"
                            onClick={() => {
                                // Credit to https://www.codegrepper.com/code-examples/javascript/javascript+download+text+as+txt+file for this snippet
                                const element = document.createElement("a")
                                element.setAttribute(
                                    "href",
                                    "data:text/plain;charset=utf-8," +
                                        encodeURIComponent(content)
                                )
                                element.setAttribute("download", "mynotes")
                                element.click()
                            }}>
                            Download Text File
                        </button>
                        <ClearData/>          

    </div>
    </div>

)

}
import { useEffect, useState } from "react";
import ClearData from "./cleardata";

export default function TextArea({ setContent, content }) {
  const defaultValue = "Just write anything...";

  useEffect(() => {
    setContent(window.localStorage.getItem("content") || defaultValue);
  }, []);

  return (
    <div>
      <textarea
        onInput={(e) => window.localStorage.setItem("content", e.target.value)}
        onFocus={(e) => {
          if (e.target.value == defaultValue) e.target.value = "";
        }}
        onBlur={(e) => {
          if (e.target.value == "") e.target.value = defaultValue;
        }}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        className="container"
        value={content}
      ></textarea>
    </div>
  );
}

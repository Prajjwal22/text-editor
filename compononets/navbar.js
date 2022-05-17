import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ClearData from "./cleardata";

export default function Navbar({ content }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="details">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="themeToggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span>Dark/Light Mode</span>
      </button>
        <p>
          {" "}
          You Text Summary: {content.trim().split(" ").length} words &amp;{" "}
          {content.length} characters
        </p>
        <button
          className="button"
          onClick={() => {
            const element = document.createElement("a");
            element.setAttribute(
              "href",
              "data:text/plain;charset=utf-8," + encodeURIComponent(content)
            );
            element.setAttribute("download", "mynotes");
            element.click();
          }}
        >
          Download Text File
        </button>
        <ClearData />
    </div>
  );
}

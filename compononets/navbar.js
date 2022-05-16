import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"; 
import TextArea from "./textarea";

export default function Navbar(){
    const {theme, setTheme } = useTheme();

    return (
      <div>

        <button aria-label="Toggle Dark Mode"
        type="button"
        className="themeToggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <span>Dark/Light Mode</span>
        </button>
        </div>
    )


}
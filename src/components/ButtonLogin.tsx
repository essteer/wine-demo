"use client";

import { cn } from "@/lib/util";
import style from "./Button.module.css";
import { useState } from "react";

export default function Button() {
    // React Hook
    const [toggle, setToggle] = useState(false);

    function toggleHandler () {
        setToggle(!toggle)
    }

    return (
        <div className={cn("p-4", style.myButton, { 
            // Login button begins greyed out, turns blue when details are entered
            "bg-slate-500": toggle, 
            "bg-blue-900": !toggle 
            })}>
            <button onClick={toggleHandler}>LOGIN</button>
            {toggle ? <p>Enter email and password</p> : <p></p>}
        </div>
    );
}
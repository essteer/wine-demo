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
            "bg-gray-500": toggle, 
            "bg-rose-900": !toggle 
            })}>
            <button onClick={toggleHandler}>REGISTER</button>
        </div>
    );
}
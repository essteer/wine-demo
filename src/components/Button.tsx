"use client";

import { cn } from "@/lib/util";
import style from "./Button.module.css";
import { useState } from "react";

export default function Button({color="color", name="name"}) {

    let btnColors = {
        "btn": "bg-slate-800",
        "btnLogin": "bg-blue-900",
        "btnRegister": "bg-rose-900",
        "disabled": "bg-grey-500"
    }

    const myColor = btnColors[color];

    return (
        <div>
            <button className={cn("p-4", style.myButton, myColor)}>{name}</button>
        </div>
    );
}
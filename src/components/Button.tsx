"use client";

import { cn } from "@/lib/util";
import style from "./Button.module.css";

export interface ColorOptions {
    [index: string]: string;
}

export default function Button({ color="color", name="name" }) {

    let buttonColors: ColorOptions = {
        "btn": "bg-slate-800",
        "btnLogin": "bg-blue-900",
        "btnRegister": "bg-rose-900",
        "disabled": "bg-grey-500"
    }

    const getButtonColor = buttonColors[color];

    return (
        <div>
            <button className={cn("p-4", style.myButton, getButtonColor)}>{name}</button>
        </div>
    );
}
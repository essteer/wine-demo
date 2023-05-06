"use client";

import { cn } from "@/lib/util";
import style from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
    return(
        <div className="grid place-items-center text-center">
            <div className="w-screen grid grid-cols-4 bg-slate-800 px-2 py-4">
                <div className="place-items-center">
                    <p className="text-sm">CART SNAPSHOT</p>
                    <h3 className="font-bold text-l">0 bottles</h3>
                    <h3 className="font-bold text-l">HK$0.00</h3>
                </div>
                <div className="place-items-center">
                </div>
                <div className="place-items-center">
                </div>
                <div className="grid justify-items-end self-center">
                    <div className={cn("p-2 text-l", style.usericon, "bg-rose-900")}>e</div>
                </div>
            </div>
        </div>
    )
}
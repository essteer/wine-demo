"use client";

import { cn } from "@/lib/util";
import style from "./Sidebar.module.css";
import { useState } from "react";
import Button from "@/components/Button";

export default function Sidebar() {
    return(
        <div className="min-h-screen grid place-items-start text-center">
            <div className="grid grid-rows-3 bg-slate-400 px-4 py-4">
                <div className="place-items-center my-2">
                    <Button color="btn" name="view cart"></Button>
                </div>
                <div className="place-items-center my-2">
                    <Button color="btn" name="browse wines"></Button>
                </div>
                <div className="place-items-center my-2">
                    <Button color="btnRegister" name="submit order"></Button>
                </div>
            </div>
        </div>
    )
}
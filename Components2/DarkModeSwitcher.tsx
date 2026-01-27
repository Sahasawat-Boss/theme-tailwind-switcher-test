"use client";

import { useState, useEffect } from "react";

export default function DarkModeSwitcher() {
    const [mode, setMode] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-mode", mode);
    }, [mode]);

    return (
        <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="px-4 py-2 rounded-xl bg-text text-bg font-bold text-sm transition-all hover:opacity-80 shadow-lg"
        >
            {mode === "light" ? "🌙 DARK MODE" : "☀️ LIGHT MODE"}
        </button>
    );
}
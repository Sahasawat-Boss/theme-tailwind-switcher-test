"use client";

import { useState, useEffect } from "react";

const themes = [
    "default", "blue", "green", "black",
    "orange", "purple", "cyan", "pink"
];

export default function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState("default");

    // ทุกครั้งที่ currentTheme เปลี่ยน ให้ไปแก้ data-theme ที่ <html>
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, [currentTheme]);

    return (
        <div className="flex flex-wrap gap-2 p-4 bg-bg/50 backdrop-blur-md rounded-2xl border border-primary/20 shadow-xl">
            {themes.map((t) => (
                <button
                    key={t}
                    onClick={() => setCurrentTheme(t)}
                    className={`
            px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all
            ${currentTheme === t
                            ? "bg-primary text-bg scale-110 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                            : "bg-bg text-text border border-primary/30 hover:border-primary opacity-70 hover:opacity-100"}
            `}
                >
                    {t}
                </button>
            ))}
        </div>
    );
}
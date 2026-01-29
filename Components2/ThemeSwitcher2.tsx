"use client";

import { useState, useEffect } from "react";

// สร้าง Mapping ของสีให้ตรงกับ CSS
const themeConfig = [
    { name: "default", hsl: "24 100% 50%" },
    { name: "blue", hsl: "210 100% 60%" },
    { name: "green", hsl: "140 70% 45%" },
    { name: "purple", hsl: "270 90% 65%" },
    { name: "cyan", hsl: "190 100% 55%" },
    { name: "pink", hsl: "330 90% 65%" },
];

export default function ThemeSwitcher2() {
    const [currentTheme, setCurrentTheme] = useState("default");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, [currentTheme]);

    return (
        <div className="flex flex-wrap gap-3 p-3 bg-bg/20 backdrop-blur-md rounded-2xl border border-text/10 shadow-xl">
            {themeConfig.map((t) => (
                <button
                    key={t.name}
                    onClick={() => setCurrentTheme(t.name)}
                    title={t.name}
                    className={`
            w-8 h-8 rounded-full transition-all duration-300 border-2 flex items-center justify-center
            ${currentTheme === t.name
                            ? "border-text scale-125 shadow-2xl z-10"
                            : "border-transparent opacity-70 hover:opacity-100 hover:scale-110"}
          `}
                    // ใส่ค่า HSL ตรงๆ เพื่อให้ปุ่มแสดงสีของตัวเองเสมอ
                    style={{ backgroundColor: `hsl(${t.hsl})` }}
                >
                    {/* แสดง Icon เล็กๆ ถ้าเป็นสีที่เลือกอยู่ (Optional) */}
                    {currentTheme === t.name && (
                        <div className="w-1 h-1 rounded-full bg-white shadow-sm animate-pulse" />
                    )}
                </button>
            ))}
        </div>
    );
}
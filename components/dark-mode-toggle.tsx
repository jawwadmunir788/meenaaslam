"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function DarkModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300">
                <div className="h-5 w-5" />
            </button>
        )
    }

    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative p-2.5 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-700 dark:to-gray-800 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg group"
            aria-label="Toggle dark mode"
        >
            <div className="relative w-5 h-5">
                {/* Sun Icon */}
                <Sun
                    className={`absolute inset-0 h-5 w-5 text-orange-600 transition-all duration-300 ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                        }`}
                />
                {/* Moon Icon */}
                <Moon
                    className={`absolute inset-0 h-5 w-5 text-yellow-300 transition-all duration-300 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                        }`}
                />
            </div>
        </button>
    )
}

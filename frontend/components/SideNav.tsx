"use client";

import { motion } from "framer-motion";

interface SideNavProps {
    activeSection: number;
    setSection: (index: number) => void;
}

const sections = [
    { id: 1, label: "Start" },
    { id: 2, label: "Impact" },
    { id: 3, label: "Vision" },
    { id: 4, label: "Expertise" },
    { id: 5, label: "Portfolio" },
    { id: 6, label: "Trust" },
    { id: 7, label: "Contact" },
];

export default function SideNav({ activeSection, setSection }: SideNavProps) {
    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6 items-end mix-blend-difference text-white">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => setSection(section.id)}
                    className="group flex items-center gap-4 focus:outline-none"
                >
                    <span
                        className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeSection === section.id ? "opacity-100 text-yellow-400" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white"
                            }`}
                    >
                        {section.label}
                    </span>
                    <div className="relative">
                        <span
                            className={`block text-xs font-bold font-mono transition-colors duration-300 ${activeSection === section.id ? "text-yellow-400" : "text-white/50"
                                }`}
                        >
                            0{section.id}
                        </span>
                        {activeSection === section.id && (
                            <motion.div
                                layoutId="activeInd"
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-yellow-400"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </div>
                </button>
            ))}

            {/* Progress Line */}
            <div className="absolute right-[-14px] top-0 h-full w-[1px] bg-white/10 -z-10" />
        </div>
    );
}

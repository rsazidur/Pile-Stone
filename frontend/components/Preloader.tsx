"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 500); // Delay before sliding up
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Speed of counter

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white text-navy overflow-hidden"
                >
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                        style={{
                            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                            backgroundSize: "80px 80px"
                        }}
                    />

                    {/* Content */}
                    <motion.div className="flex flex-col items-center z-10 relative">
                        <div className="flex items-center gap-4 md:gap-8">
                            {/* PS Logo - Reveals at 100% */}
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={count > 99 ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="overflow-hidden flex items-center justify-center"
                            >
                                <div className="w-12 h-12 md:w-20 md:h-20 bg-navy text-yellow flex items-center justify-center font-black text-xl md:text-3xl tracking-tighter">
                                    PS
                                </div>
                            </motion.div>

                            {/* Logo - Stacked like MAMAN CORP */}
                            <div className="text-center space-y-0 leading-none">
                                <h1 className="text-4xl font-black tracking-tighter uppercase sm:text-6xl md:text-7xl text-navy">
                                    PILE
                                </h1>
                                <h1 className="text-4xl font-black tracking-tighter uppercase sm:text-6xl md:text-7xl text-navy">
                                    STONE
                                </h1>
                            </div>
                        </div>

                        {/* Footer Info (Counter + Tagline) */}
                        <div className="mt-12 flex flex-col items-center gap-2">
                            {/* Small Counter */}
                            <div className="text-xl md:text-2xl font-bold font-mono text-navy/50 tabular-nums">
                                {count}%
                            </div>

                            {/* Tagline */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-navy/40"
                            >
                                Quality is our standard
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

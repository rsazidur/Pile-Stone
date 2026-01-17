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
                    className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white text-slate-900 overflow-hidden"
                >
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                        style={{
                            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                            backgroundSize: "80px 80px"
                        }}
                    />

                    {/* Content */}
                    <motion.div className="flex flex-col items-center z-10 relative space-y-8">
                        {/* Logo - Stacked like MAMAN CORP */}
                        <div className="text-center space-y-0">
                            <h1 className="text-5xl font-black tracking-tighter uppercase sm:text-7xl leading-none">
                                PILE
                            </h1>
                            <h1 className="text-5xl font-black tracking-tighter uppercase sm:text-7xl leading-none">
                                STONE
                            </h1>
                        </div>

                        {/* Huge Counter */}
                        <div className="text-[6rem] font-bold leading-none tracking-tighter sm:text-[10rem] tabular-nums">
                            {count}
                        </div>

                        {/* Tagline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500"
                        >
                            Quality is our standard
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

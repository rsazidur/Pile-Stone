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
                    setTimeout(() => setIsLoading(false), 500); // Delay before fading out
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Speed of counter

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
                >
                    <div className="text-[12rem] font-bold leading-none tracking-tighter sm:text-[20rem]">
                        {count}
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 text-sm font-light tracking-[0.5em] uppercase text-gray-400"
                    >
                        Quality is our standard
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

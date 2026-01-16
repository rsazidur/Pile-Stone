"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroVideo() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                {/* Placeholder video URL - Replace with actual asset later */}
                <source
                    src="https://videos.pexels.com/video-files/3745672/3745672-hd_1920_1080_25fps.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Hero Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    className="max-w-4xl text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl"
                >
                    STRONG FOUNDATIONS <br /> LASTING IMPRESSIONS
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="mt-6 max-w-lg text-lg text-gray-200"
                >
                    Engineering excellence in piling and construction solutions.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-white/70">Scroll to explore</span>
                    <ChevronDown className="animate-bounce text-white" />
                </div>
            </motion.div>
        </section>
    );
}

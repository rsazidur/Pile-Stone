"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroVideo() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-80"
            >
                {/* Placeholder video URL - Replace with actual asset later */}
                <source
                    src="https://videos.pexels.com/video-files/3745672/3745672-hd_1920_1080_25fps.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Hero Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white pb-12">
                <div className="flex flex-col items-center gap-2 overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 2.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl"
                    >
                        STRONG FOUNDATIONS
                    </motion.h1>
                </div>

                <div className="flex flex-col items-center gap-2 overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 3.0, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl"
                    >
                        LASTING IMPRESSIONS
                    </motion.h1>
                </div>

                <div className="mt-8 overflow-hidden">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 3.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="text-lg text-gray-200 font-medium tracking-wide uppercase"
                    >
                        Engineering excellence in piling and construction solutions
                    </motion.p>
                </div>

                <motion.div
                    className="overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 1 }}
                >
                    <p className="mt-6 max-w-lg text-lg text-gray-300 md:text-xl font-medium">
                        Determined to provide <span className="text-yellow-400 font-bold">top-notch</span> quality service in the field of Civil Engineering.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-yellow-400/70">Scroll to explore</span>
                    <ChevronDown className="animate-bounce text-yellow-400" />
                </div>
            </motion.div>
        </section>
    );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurvedLine from "@/components/CurvedLine";
import { motion } from "framer-motion";

export default function ServicesPage() {
    const services = [
        {
            title: "Soil Test",
            description: "A soil test analyzes the physical, chemical, and engineering properties of soil to assess its suitability for construction. Key tests include grain size analysis, compaction, strength, and chemical tests (e.g., pH). Soil tests help ensure safe foundation design and optimize agricultural practices by providing crucial data."
        },
        {
            title: "Cast-in Situ Piling Work",
            description: "Cast-in-situ piling involves drilling a hole on-site, placing a steel reinforcement cage, and pouring concrete to form piles directly in the ground. It is ideal for deep foundations in soft or variable soils, offering adaptability and less noise compared to precast piles. Effective but time-consuming."
        },
        {
            title: "Static Axial Compression Test",
            description: "The Static Axial Compression Test assesses the vertical load-bearing capacity of piles. A controlled axial load is applied gradually, measuring settlement at each increment to ensure the foundation can support design loads without failure."
        },
        {
            title: "Lateral Pile Load Test",
            description: "Evaluates a pile's capacity to resist horizontal forces like wind or earthquakes. Lateral loads are applied incrementally to measure displacement, crucial for bridges and high-rise buildings."
        },
        {
            title: "Full Scale Loading Test of Footing",
            description: "Evaluates the performance of a footing under actual load conditions to determine bearing capacity and settlement behavior. Provides real-world data but requires specialized equipment."
        },
        {
            title: "Driving of Pre-Cast Piling Work",
            description: "Involves installing pre-manufactured concrete or steel piles by driving them into the ground. It is fast, durable, and offers high load-bearing capacity, ideal for deep foundations in soft soils."
        }
    ];

    return (
        <main className="bg-navy min-h-screen text-white font-sans selection:bg-yellow selection:text-navy">
            <Navbar />

            {/* Banner / Header */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="bg-yellow w-full md:w-1/2 p-12 md:p-24 flex items-center justify-center">
                            <h1 className="text-6xl md:text-8xl font-black uppercase text-navy leading-none text-center md:text-left">
                                We Do <br /> BEST <br /> FOR <br /> YOU
                            </h1>
                        </div>
                        <div className="w-full md:w-1/2 h-full min-h-[400px] bg-slate-800 relative bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale">
                            <div className="absolute inset-0 bg-navy/20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto space-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex gap-8 md:gap-12 icon-hover-trigger"
                        >
                            {/* Icon / Curve */}
                            <div className="shrink-0 w-16 md:w-24 pt-2">
                                <CurvedLine className="w-full h-auto drop-shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-transform duration-500 ease-out hover:scale-110" />
                            </div>

                            {/* Text Content */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold uppercase text-yellow mb-4 tracking-wide font-heading">
                                    {service.title}
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base border-l border-white/10 pl-6">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

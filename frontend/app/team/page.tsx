"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TeamPage() {
    return (
        <main className="bg-navy min-h-screen text-white font-sans relative overflow-hidden selection:bg-yellow selection:text-navy">
            <Navbar />

            {/* Background Accent Shape (Yellow Triangle on Left) */}
            <div className="absolute top-[20%] left-0 w-0 h-0 
            border-t-[200px] border-t-transparent
            border-l-[300px] border-l-yellow
            border-b-[200px] border-b-transparent
            opacity-80 z-0 pointer-events-none mix-blend-overlay"
            />

            <section className="pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black uppercase text-yellow mb-20 font-heading tracking-tight">
                        Our Team
                    </h1>

                    {/* Profile Card (Abdul Haque Style) */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                        {/* Image Circle */}
                        <div className="relative shrink-0 group">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[8px] border-yellow overflow-hidden shadow-2xl relative z-10 bg-slate-700 transition-transform duration-500 group-hover:scale-105">
                                {/* Placeholder for Image - Ideally user replaces this URL */}
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Abdul Haque</h2>
                            <h3 className="text-xl md:text-2xl text-yellow font-medium mb-1">Managing Director</h3>
                            <p className="text-gray-400 italic mb-6">B.COM & M.COM (Jagannath University)</p>

                            <div className="space-y-1 text-sm font-bold uppercase tracking-wide text-gray-300 mb-8">
                                <p><span className="text-yellow">Founding Chairman:</span> Banasree Society</p>
                                <p><span className="text-yellow">President:</span> Banasree Society</p>
                            </div>

                            <p className="text-gray-300 leading-relaxed max-w-2xl text-lg border-l-4 border-yellow pl-6">
                                "I established Pile Stone and Construction Firm 25 years ago with a vision to deliver excellence in construction. Over the years, we have worked on diverse projects, including power plants and commercial high-rise buildings, collaborating with renowned companies."
                            </p>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="mt-20 p-8 border border-white/10 bg-white/5 rounded-sm backdrop-blur-sm">
                        <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                            Our commitment to quality, safety, and and timely delivery has helped us build a strong reputation in the industry. At Pile Stone and Construction Firm, we aim to contribute to the development of our communities while maintaining long-lasting relationships with our clients.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

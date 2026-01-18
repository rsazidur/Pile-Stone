"use client";

import ProfileCard from "@/components/ProfileCard";
import { team } from "@/content/team";

export default function TeamPage() {
    return (
        <main className="bg-navy min-h-screen text-white font-sans relative overflow-x-hidden selection:bg-yellow selection:text-navy">

            <section className="pt-32 pb-20 px-4 md:px-6 relative z-10 w-full overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black uppercase text-yellow mb-24 font-heading tracking-tight text-center md:text-left">
                        Our Team
                    </h1>

                    <div className="space-y-32">
                        {team.map((member, index) => (
                            <ProfileCard
                                key={index}
                                {...member}
                                align={index % 2 === 1 ? "right" : "left"}
                            />
                        ))}
                    </div>

                    {/* Bottom Quote / Commitment */}
                    <div className="mt-32 p-10 md:p-16 border-t border-b border-white/10 bg-slate-900/50 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow"></div>
                        <p className="text-gray-300 leading-loose text-center max-w-5xl mx-auto text-lg md:text-xl font-light">
                            <span className="font-bold text-white block mb-4 uppercase tracking-widest text-sm">Our Promise</span>
                            Our commitment to quality, safety, and timely delivery has helped us build a strong reputation in the industry. At <span className="text-yellow font-bold">Pile Stone</span>, we aim to contribute to the development of our communities while maintaining long-lasting relationships with our clients.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

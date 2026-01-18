"use client";

import { clients } from "@/content/clients";

export default function ClientsPage() {
    return (
        <main className="bg-navy min-h-screen text-white font-sans selection:bg-yellow selection:text-navy">

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-black uppercase text-yellow mb-6 font-heading tracking-tight">
                            Our Clients
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                            We are proud to have partnered with leading companies across the nation, delivering strong foundations for their success.
                        </p>
                    </div>

                    {/* Client List / Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* 
                            Assuming 'clients' has a list. 
                            If it's short, let's render standard placeholders to look populated 
                            if the user hasn't added real data yet.
                        */}
                        {[...clients, ...Array(8).fill({ name: "Partner Company", industry: "Real Estate" })].map((client, index) => (
                            <div key={index} className="group relative aspect-square bg-slate-800 border border-white/5 flex flex-col items-center justify-center p-6 hover:border-yellow/50 transition-all duration-300">
                                <div className="text-4xl text-white/20 font-black mb-4 group-hover:text-yellow group-hover:scale-110 transition-all">
                                    LOGO
                                </div>
                                <h3 className="text-center font-bold uppercase text-sm tracking-widest text-gray-400 group-hover:text-white transition-colors">
                                    {client.name || "Client Name"}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

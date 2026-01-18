"use client";

import { machineries } from "@/content/machineries";

export default function MachineriesPage() {
    return (
        <main className="bg-navy min-h-screen text-white font-sans selection:bg-yellow selection:text-navy">

            <section className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black uppercase text-yellow mb-2 font-heading">
                        Our Machineries
                    </h1>
                    <div className="inline-block border-b-2 border-white pb-1">
                        <h2 className="text-xl font-bold uppercase tracking-widest text-white">
                            List of Piling Equipment
                        </h2>
                    </div>
                </div>

                {/* Table Container */}
                <div className="w-full max-w-5xl overflow-x-auto">
                    <table className="w-full border-collapse border border-white/20 text-sm md:text-base">
                        <thead>
                            <tr className="bg-black/40 text-white">
                                <th className="border border-white/20 py-4 px-4 w-24 text-center font-bold uppercase tracking-widest">SL</th>
                                <th className="border border-white/20 py-4 px-6 text-center font-bold uppercase tracking-widest">Name of Equipment</th>
                                <th className="border border-white/20 py-4 px-4 w-32 text-center font-bold uppercase tracking-widest">Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {machineries.map((item, index) => (
                                <tr key={index} className="hover:bg-white/5 transition-colors">
                                    <td className="border border-white/20 py-4 px-4 text-center font-mono font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </td>
                                    <td className="border border-white/20 py-4 px-6 font-medium uppercase text-gray-200">
                                        {item.name}
                                    </td>
                                    <td className="border border-white/20 py-4 px-4 text-center font-bold text-yellow font-mono">
                                        {item.quantity}
                                    </td>
                                </tr>
                            ))}
                            {/* Filler Rows to ensure table looks substantial */}
                            {[...Array(3)].map((_, i) => (
                                <tr key={`dummy-${i}`} className="hover:bg-white/5 transition-colors opacity-30 select-none">
                                    <td className="border border-white/20 py-4 px-4 text-center font-mono font-bold">
                                        --
                                    </td>
                                    <td className="border border-white/20 py-4 px-6 font-medium uppercase">
                                        [More Equipment]
                                    </td>
                                    <td className="border border-white/20 py-4 px-4 text-center font-bold font-mono">
                                        --
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}

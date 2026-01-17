"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import Preloader from "@/components/Preloader";
import HeroVideo from "@/components/HeroVideo";
import SideNav from "@/components/SideNav";
import { DiagonalSeparator } from "@/components/SectionSeparator";
import { ArrowRight, CheckCircle2, Cog, HardHat, TrendingUp, Anchor, ShieldCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";

// Section Wrapper Component
const Section = ({
  children,
  id,
  className = "",
  onVisible
}: {
  children: React.ReactNode,
  id: number,
  className?: string,
  onVisible?: (id: number) => void
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView && onVisible) onVisible(id);
  }, [isInView, id, onVisible]);

  return (
    <section
      id={`section-${id}`}
      ref={ref}
      className={`snap-start relative h-screen w-full overflow-hidden flex flex-col justify-center ${className}`}
    >
      {children}
    </section>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState(1);

  const scrollToSection = (id: number) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="snap-y snap-mandatory h-screen w-full overflow-y-scroll scroll-smooth bg-navy text-white font-sans selection:bg-yellow selection:text-navy">
      <Preloader />
      <SideNav activeSection={activeSection} setSection={scrollToSection} />

      {/* 01: HERO */}
      <Section id={1} onVisible={setActiveSection} className="relative">
        <HeroVideo />
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
          <DiagonalSeparator />
        </div>
      </Section>

      {/* 02: IMPACT (STATS) */}
      <Section id={2} onVisible={setActiveSection} className="bg-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow font-bold tracking-[0.2em] uppercase text-sm mb-4 block">02 / Our Scale</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 font-heading">
              Built for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Magnitude</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed max-w-lg border-l-2 border-yellow pl-6">
              We define the skyline through deep foundations. With over two decades of engineering dominance, our footprint spans the nation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "2500+", label: "Completed Projects" },
              { num: "1800+", label: "Buildings in Banasree" },
              { num: "22", label: "Years Experience" },
              { num: "100%", label: "Safety Record" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 bg-white/5 border border-white/10 hover:border-yellow/50 transition-colors group"
              >
                <div className="text-4xl md:text-5xl font-black text-white tabular-nums group-hover:text-yellow transition-colors font-heading">{stat.num}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 03: VISION (MANIFESTO) */}
      <Section id={3} onVisible={setActiveSection} className="bg-white text-navy relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-0 skew-x-12 translate-x-32" />

        <div className="max-w-5xl mx-auto px-6 text-center z-10">
          <span className="text-navy/50 font-bold tracking-[0.2em] uppercase text-sm mb-6 block">03 / The Manifesto</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-10 font-heading">
            "Quality is not just our standard. <br /> It is the <span className="text-yellow inline-block bg-navy px-2 transform -skew-x-6">Foundation</span> of everything we build."
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left mt-20">
            <div>
              <h3 className="text-xl font-bold uppercase mb-4 flex items-center gap-3">
                <Anchor className="text-yellow" /> Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class engineering solutions that ensure safety, durability, and efficiency, setting new benchmarks in the construction industry.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase mb-4 flex items-center gap-3">
                <ShieldCheck className="text-yellow" /> Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the nation's most trusted partner in deep foundation engineering, driving sustainable growth through innovation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 04: EXPERTISE (SERVICES) */}
      <Section id={4} onVisible={setActiveSection} className="bg-navy">
        <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-yellow font-bold tracking-[0.2em] uppercase text-sm block mb-2">04 / Expertise</span>
              <h2 className="text-5xl font-black uppercase font-heading">Comprehensive Solutions</h2>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-yellow transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-[60vh]">
            {[
              { title: "Soil Investigation", sub: "Geotechnical Reporting", img: "bg-slate-800" },
              { title: "Load Testing", sub: "Static & Dynamic Analysis", img: "bg-stone-800" },
              { title: "Piling Works", sub: "Cast-in-situ & Hydraulic", img: "bg-zinc-800" },
              { title: "Shore Protection", sub: "Deep Excavation Safety", img: "bg-neutral-800" },
              { title: "Hydrological Survey", sub: "Water Body Mapping", img: "bg-gray-800" },
              { title: "Civil Construction", sub: "End-to-End Management", img: "bg-slate-900" },
            ].map((s, i) => (
              <div key={i} className={`relative group overflow-hidden border border-white/5 ${s.img}`}>
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-navy to-transparent">
                  <h3 className="text-2xl font-bold uppercase font-heading group-hover:text-yellow transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{s.sub}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="text-yellow -rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 05: PORTFOLIO */}
      <Section id={5} onVisible={setActiveSection} className="bg-white text-navy">
        <div className="flex h-full w-full">
          {/* List */}
          <div className="w-full md:w-1/3 bg-white p-12 flex flex-col justify-center border-r border-gray-100 z-10">
            <span className="text-navy/40 font-bold tracking-[0.2em] uppercase text-sm mb-8 block">05 / Portfolio</span>
            <h2 className="text-4xl font-black uppercase mb-12 font-heading">Featured <br /> Works</h2>
            <ul className="space-y-6">
              {["Maman Tower Foundation", "Banasree Heights", "Padma Bridge Link"].map((p, i) => (
                <li key={i} className="group cursor-pointer">
                  <span className="text-xs font-bold text-gray-300 mr-4">0{i + 1}</span>
                  <span className="text-xl font-bold uppercase text-gray-400 group-hover:text-navy transition-colors">{p}</span>
                </li>
              ))}
            </ul>
            <Link href="/projects" className="mt-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest bg-navy text-white px-6 py-4 hover:bg-yellow hover:text-navy transition-colors w-fit">
              All Projects
            </Link>
          </div>

          {/* Image Preview */}
          <div className="hidden md:block w-2/3 h-full bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white/10 text-9xl font-black uppercase rotate-90 origin-center whitespace-nowrap">
                PILE STONE
              </h3>
            </div>
          </div>
        </div>
      </Section>

      {/* 06/07: TRUST & CONTACT (Combined for footer effect or separate slidse) */}
      {/* 06: TRUST */}
      <Section id={6} onVisible={setActiveSection} className="bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-yellow font-bold tracking-[0.2em] uppercase text-sm mb-4 block">06 / Trust</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-16 font-heading">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-16 w-32 bg-white/10 flex items-center justify-center font-bold text-white/50 rounded">LOGO</div>
            ))}
          </div>
        </div>
      </Section>

      {/* 07: CONTACT */}
      <Section id={7} onVisible={setActiveSection} className="bg-yellow text-navy relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-navy/60 font-bold tracking-[0.2em] uppercase text-sm mb-6 block">07 / Contact</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 font-heading text-navy">
            Ready to <br /> Start?
          </h2>
          <p className="text-xl font-medium mb-12 max-w-xl mx-auto">
            Consult with our engineering team today for precision solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-navy text-white px-10 py-5 font-black uppercase tracking-widest text-lg hover:bg-white hover:text-navy transition-colors shadow-2xl">
              Get a Quote
            </Link>
            <Link href="tel:+880123456789" className="border-2 border-navy text-navy px-10 py-5 font-black uppercase tracking-widest text-lg hover:bg-navy hover:text-white transition-colors">
              Call Us
            </Link>
          </div>
        </div>

        {/* Footer Copyright in the section */}
        <div className="absolute bottom-6 left-0 w-full text-center text-xs font-bold uppercase tracking-widest opacity-40">
          &copy; 2024 Pile Stone Engineering. All Rights Reserved.
        </div>
      </Section>
    </main>
  );
}

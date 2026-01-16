import Link from "next/link";
import { site } from "@/content/site";
import Preloader from "@/components/Preloader";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen w-full overflow-y-scroll scroll-smooth">
      <Preloader />

      {/* Section 1: Hero */}
      <div className="snap-start w-full h-screen">
        <HeroVideo />
      </div>

      {/* Section 2: About Intro */}
      <section className="snap-start w-full h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-slate-900">
            PIONEERING <br /> EXCELLENCE
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {site.name} is a leader in soil investigation and deep foundation engineering.
            We combine technical expertise with state-of-the-art machinery to deliver
            precision and reliability in every project.
          </p>
          <div className="mt-10">
            <Link href="/about" className="inline-block border-b-2 border-slate-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-slate-700">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Services Preview */}
      <section className="snap-start w-full h-screen flex items-center bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 w-full grid gap-12 md:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">What We Do</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl text-slate-900">
              COMPREHENSIVE <br /> SOLUTIONS
            </h2>
            <p className="mt-4 text-gray-600">
              From soil testing to heavy pile implementation, we handle the toughest ground engineering challenges.
            </p>
            <Link href="/services" className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105">
              View All Services
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Visual placeholders for services commonly asked for */}
            <div className="aspect-square bg-white p-6 shadow-sm rounded-2xl flex flex-col justify-end">
              <span className="font-bold text-lg">Soil Investigation</span>
            </div>
            <div className="aspect-square bg-slate-900 p-6 shadow-sm rounded-2xl flex flex-col justify-end text-white">
              <span className="font-bold text-lg">Pile Load Test</span>
            </div>
            <div className="aspect-square bg-gray-200 p-6 shadow-sm rounded-2xl flex flex-col justify-end">
              <span className="font-bold text-lg">Cast-in-situ Piling</span>
            </div>
            <div className="aspect-square bg-white p-6 shadow-sm rounded-2xl flex flex-col justify-end">
              <span className="font-bold text-lg">Shore Protection</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

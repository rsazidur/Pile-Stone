import { site } from "@/content/site";

export default function ContactPage() {
    return (
        <main className="relative min-h-[90vh] w-full bg-slate-900 text-slate-100 selection:bg-yellow-500 selection:text-slate-900">
            {/* Decorative Background Element */}
            <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden opacity-20 pointer-events-none">
                {/* This will be the abstract structure image */}
                <img
                    src="/pictures/abstract_structure.png"
                    alt=""
                    className="h-full w-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-900/0 to-slate-900"></div>
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden md:grid-cols-2">
                {/* Left Side: Content & Info */}
                <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
                    <div className="relative z-10">
                        <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-yellow-500">
                            Get in Touch
                        </span>
                        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                            Let's Build <br />
                            <span className="text-slate-400">Something Great</span>
                        </h1>
                        <p className="mb-8 block max-w-md text-slate-400">
                            Ready to start your next project? Contact us today to discuss how we can help you achieve your goals with precision and excellence.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-slate-800 text-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Visit Us</h3>
                                    <p className="mt-1 text-sm text-slate-400">{site.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-slate-800 text-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Email Us</h3>
                                    <p className="mt-1 text-sm text-slate-400">{site.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-slate-800 text-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Call Us</h3>
                                    <p className="mt-1 text-sm text-slate-400">{site.phones.join(", ")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form & Hero Image */}
                <div className="relative flex items-center justify-center p-6 md:p-12">
                    {/* Background Image for this section */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/pictures/contact_hero.png"
                            alt="Construction Site"
                            className="h-full w-full object-cover opacity-30 grayscale transition-all duration-700 hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
                    </div>

                    <form className="relative z-10 w-full max-w-md rounded-xl border border-slate-700/50 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-sm transition-all hover:border-yellow-500/30" method="post" action="/api/contact">
                        <h2 className="mb-6 text-2xl font-bold text-white">Send us a message</h2>

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                            <input
                                name="name"
                                className="w-full rounded border border-slate-600 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition-colors focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="w-full rounded border border-slate-600 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition-colors focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                name="message"
                                className="w-full resize-none rounded border border-slate-600 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition-colors focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                rows={4}
                                placeholder="Tell us about your project..."
                                required
                            />
                        </div>

                        <button className="group relative w-full overflow-hidden rounded bg-yellow-500 px-6 py-3 text-center font-bold text-slate-900 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            <span className="relative z-10">Send Message</span>
                            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0"></div>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

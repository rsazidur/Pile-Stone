"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/machineries", label: "Machineries" },
    { href: "/services", label: "Solutions" },
    { href: "/projects", label: "Projects" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${isScrolled ? "bg-navy py-3 shadow-md text-white" : "bg-transparent py-6 text-white"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }} // Wait for preloader
                >
                    <Link href="/" className="text-2xl font-black tracking-tighter uppercase relative z-50 hover:text-yellow transition-colors">
                        PILE STONE
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden gap-8 md:flex">
                    {navLinks.map((item, idx) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 + (idx * 0.1), duration: 1 }}
                        >
                            <Link
                                href={item.href}
                                className={`text-sm font-bold uppercase tracking-wide transition-colors ${isScrolled ? "hover:text-yellow" : "hover:text-yellow"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
                    >
                        <div className="flex flex-col p-4 text-slate-900">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="py-3 text-sm font-bold uppercase tracking-wide border-b border-gray-100 last:border-none"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

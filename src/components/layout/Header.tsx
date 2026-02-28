"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    // Toggle scrolling removed to keep scrollbar visible as per user request
    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "";
    //     }
    //     return () => {
    //         document.body.style.overflow = "";
    //     };
    // }, [isOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between bg-[#f5f5f5] text-black px-4 md:px-10 py-3"
                )}
            >
                {/* Logo */}
                <Link href="/" className="pointer-events-auto inline-block">
                    <span className="font-sans font-bold text-xl tracking-tighter leading-none">
                        MVPfast
                    </span>
                </Link>

                {/* Navigation Links - Centered */}
                <nav className={cn(
                    "hidden md:flex flex-1 items-center justify-around mx-8 transition-opacity duration-300",
                    isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}>
                    <Link href="#" className="hover:opacity-70 transition-opacity text-sm font-medium leading-none">Studios</Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity relative text-sm font-medium leading-none">
                        Projects
                        <span className="absolute -top-1 -right-3 text-[10px] opacity-60">27</span>
                    </Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity text-sm font-medium leading-none">Blog</Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity text-sm font-medium leading-none">Contact</Link>
                </nav>

                {/* Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="pointer-events-auto flex flex-col gap-[6px] w-[30px] h-[20px] group justify-center items-center relative"
                >
                    <div className={cn(
                        "w-[24px] h-[2px] bg-current absolute transition-transform duration-300",
                        isOpen ? "rotate-45" : "-translate-y-[4px]"
                    )} />
                    <div className={cn(
                        "w-[24px] h-[2px] bg-current absolute transition-transform duration-300",
                        isOpen ? "-rotate-45" : "translate-y-[4px]"
                    )} />
                </button>
            </header>

            <AnimatePresence>
                {isOpen && <MenuOverlay onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </>
    );
}

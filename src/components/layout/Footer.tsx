"use client";

import Link from "next/link";

const footerLinks = {
    company: [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" }
    ],
    resources: [
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/#faq" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Careers", href: "/careers" }
    ],
    social: [
        { label: "Twitter", href: "https://twitter.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Dribbble", href: "https://dribbble.com" },
        { label: "Instagram", href: "https://instagram.com" }
    ]
};

export function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white pt-20 pb-8 px-4 md:px-6">
            {/* Large Branding */}
            <div className="mb-20">
                <h2 className="text-[15vw] leading-[0.85] font-semibold tracking-tighter uppercase">
                    MVPfast
                </h2>
                <div className="flex justify-end -mt-2 md:-mt-8 pr-4 md:pr-10">
                    <span className="text-2xl md:text-4xl font-semibold tracking-tight">Studios</span>
                </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                {/* Company Links */}
                <div>
                    <h4 className="text-sm font-semibold mb-4 opacity-50">Company</h4>
                    <ul className="space-y-3">
                        {footerLinks.company.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-sm hover:underline underline-offset-4 transition-opacity hover:opacity-70"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources Links */}
                <div>
                    <h4 className="text-sm font-semibold mb-4 opacity-50">Resources</h4>
                    <ul className="space-y-3">
                        {footerLinks.resources.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-sm hover:underline underline-offset-4 transition-opacity hover:opacity-70"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-sm font-semibold mb-4 opacity-50">Social</h4>
                    <ul className="space-y-3">
                        {footerLinks.social.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:underline underline-offset-4 transition-opacity hover:opacity-70"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-sm font-semibold mb-4 opacity-50">Newsletter</h4>
                    <p className="text-sm text-neutral-400 mb-4">
                        Stay updated with our latest work and insights.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 bg-neutral-900 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-white/30 transition-colors"
                        />
                        <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shrink-0 hover:bg-neutral-200 transition-colors">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 1L11 1M11 1V11M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-neutral-500">
                    © 2025 MVPfast Studios. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <Link href="/privacy" className="text-sm text-neutral-500 hover:text-white transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-sm text-neutral-500 hover:text-white transition-colors">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}

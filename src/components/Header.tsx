'use client';

import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li><Link href="/" className="title">Kmmz1127</Link></li>
                    <li className="right"><Link href="/about">About</Link></li>
                    <li><Link href="/works">Works</Link></li>
                    {/* <li><Link href="/contact">Contact</Link></li> */}
                </ul>
            </nav>
        </div>
    );
}

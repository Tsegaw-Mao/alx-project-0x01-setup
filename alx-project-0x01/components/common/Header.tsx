//basic Header component
import React from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My Website</h1>
                <nav>
                    <Link href="/" className="text-blue-400 hover:underline mx-2">Home</Link>
                    <Link href="/about" className="text-blue-400 hover:underline mx-2">About</Link>
                    <Link href="/contact" className="text-blue-400 hover:underline mx-2">Contact</Link>
                </nav>
            </div>
        </header>
    )
}
// app/not-found.jsx
'use client';

import Link from 'next/link';
import page404 from "@/public/page-not-found.svg"
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <Image src={page404} alt='page-not-found'/>
      <p className="text-xl font-semibold mb-6">This page could not be found.</p>
      <Link  href="/">
      <button className='bg-secondary text-white px-6 py-3 rounded-md drop-shadow-lg transform transition-all hover:scale-105 duration-200 ease-in-out' >Go back home</button>
        
      </Link>
    </div>
  );
}

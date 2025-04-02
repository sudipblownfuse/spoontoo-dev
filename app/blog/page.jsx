"use client";

import BlogTopSec from '@/components/BlogComponents/BlogTopSec';
import RecentBlogSec from '@/components/BlogComponents/RecentBlogSec';
import React from 'react'
import rb1 from "@/public/blog/recent-blogs/rb1.png"
import rb2 from "@/public/blog/recent-blogs/rb2.png"
import rb3 from "@/public/blog/recent-blogs/rb3.png"
import rb4 from "@/public/blog/recent-blogs/rb4.png"

const page = () => {

    const recentBlogs = [
        {
            image: rb1,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: rb2,
            title: "TikTok for Business: The Ultimate Playbook for 2025",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: rb3,
            title: "TikTok for Business: The Ultimate Playbook for 2025",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: rb4,
            title: "TikTok for Business: The Ultimate Playbook for 2025",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        }
    ]

  return (
    <main className="w-full min-h-screen pt-[8vh]">
      <BlogTopSec/>
      <RecentBlogSec recentBlogs={recentBlogs}/>
    </main>
  )
}

export default page

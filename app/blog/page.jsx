"use client";

import BlogTopSec from '@/components/BlogComponents/BlogTopSec';
import RecentBlogSec from '@/components/BlogComponents/RecentBlogSec';
import React from 'react'
import rb1 from "@/public/blog/recent-blogs/rb1.png"
import rb2 from "@/public/blog/recent-blogs/rb2.png"
import rb3 from "@/public/blog/recent-blogs/rb3.png"
import rb4 from "@/public/blog/recent-blogs/rb4.png"
import AllBlogsSec from '@/components/BlogComponents/AllBlogsSec';

import ab1 from "@/public/blog/all-blogs/ab1.png"
import ab2 from "@/public/blog/all-blogs/ab2.png"
import ab3 from "@/public/blog/all-blogs/ab3.png"
import ab4 from "@/public/blog/all-blogs/ab4.png"
import ab5 from "@/public/blog/all-blogs/ab5.png"
import ab6 from "@/public/blog/all-blogs/ab6.png"


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

    const allBlogs = [
        {
            image: ab1,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab2,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab3,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab4,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab5,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab6,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab1,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab2,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab3,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab4,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab5,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab6,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab6,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab1,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab2,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab5,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab4,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
        {
            image: ab2,
            title: "Returning to Profitability: Spoontoo 2024 Profit Share & Formula",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
            categories: ["AR View", "Research", "Technology"]
        },
    ]

  return (
    <main className="w-full min-h-screen pt-28">
      <BlogTopSec/>
      <RecentBlogSec recentBlogs={recentBlogs}/>
      <AllBlogsSec allBlogs={allBlogs}/>
    </main>
  )
}

export default page

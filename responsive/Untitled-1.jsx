"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Book,
  Calculator,
  FlaskRoundIcon as Flask,
  GraduationCap,
  Leaf,
  Globe2,
  Atom,
  Users,
  ArrowUpRight,
} from "lucide-react"

const EnhancedDarkUI = () => {
  const subjects = [
    { name: "English", icon: Book },
    { name: "History", icon: GraduationCap },
    { name: "Maths", icon: Calculator },
    { name: "Geography", icon: Globe2 },
    { name: "Chemistry", icon: Flask },
    { name: "Biology", icon: Leaf },
    { name: "Physics", icon: Atom },
    { name: "Activities", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20232223-O9Tk6eXSWIdChUmog6EZc9wr7RFSqE.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white">
              Sign In
            </button>
          </div>
        </motion.nav>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          {/* Subjects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-zinc-800/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-zinc-800 p-2.5 transition-all duration-300 group-hover:bg-orange-500/10">
                      {React.createElement(subject.icon, { className: "h-5 w-5 text-orange-500" })}
                    </div>
                    <span className="text-lg font-medium text-white">{subject.name}</span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-all duration-300 group-hover:text-orange-500" />
                </div>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-orange-500/50 hover:bg-zinc-800/50"
          >
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl transition-all duration-300 group-hover:bg-orange-500/20"></div>
            <div className="relative z-10 space-y-6">
              <div className="inline-flex rounded-full bg-orange-500/10 px-4 py-1.5 text-sm text-orange-500 transition-all duration-300 group-hover:bg-orange-500/20">
                Featured Course
              </div>
              <h2 className="text-4xl font-bold leading-tight text-white transition-all duration-300 group-hover:text-orange-500">
                Learn the rudiment of design
              </h2>
              <p className="text-lg text-zinc-400 transition-all duration-300 group-hover:text-zinc-300">
                with John Steed, Product Lead at Learnfy
              </p>
              <button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-600 group-hover:bg-orange-600">
                Start Learning
                <ArrowUpRight className="h-4 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedDarkUI


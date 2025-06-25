"use client"

import type React from "react"
import Link from "next/link"

export default function AICounselorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="https://vapi.ai/" className="flex items-center gap-2">
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
              Chat with AI Counselor
            </button>
          </Link>
        </div>
      </header>
    </div>
  )
}


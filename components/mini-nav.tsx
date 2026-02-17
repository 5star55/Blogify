'use client'
import React from "react"
import { ArrowBigLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Nav({ text }: { text: string }) {
const router= useRouter()
  return (
    <div className="relative w-full h-12 border-b border-white/20">
      <button
        onClick={()=>router.back()}
        className="absolute left-3 top-1/2 -translate-y-1/2"
        aria-label="Go back"
      >
        <ArrowBigLeft />
      </button>

      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {text}
      </h1>
    </div>
  )
}

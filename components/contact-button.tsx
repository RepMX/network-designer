"use client" // This tells Next.js and Vercel to handle this code on the user's browser

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Check } from "lucide-react"

export function ContactButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("design@jedy.cc")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Button
      size="lg"
      onClick={handleCopy}
      className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 gap-2.5 group whitespace-nowrap min-w-[190px] inline-flex items-center justify-center transition-all duration-200"
    >
      {copied ? (
        <>
          Copied to Clipboard!
          <Check className="h-4 w-4 text-emerald-400 animate-in fade-in zoom-in-75 duration-150" />
        </>
      ) : (
        <>
          design@jedy.cc
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </>
      )}
    </Button>
  )
}
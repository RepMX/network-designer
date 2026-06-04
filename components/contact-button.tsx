"use client" // This tells Next.js and Vercel to handle this code on the user's browser

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react" // Swapped ArrowUpRight for Copy

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
      onClick={handleCopy}
      // Removed size="lg" to clear default bloated padding
      // Explicitly set h-11 for structure, px-5 for clean margins
      // min-w-[215px] locks the width perfectly so it doesn't layout-shift when text changes
      className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 gap-2.5 group whitespace-nowrap h-11 px-5 min-w-[215px] inline-flex items-center justify-center transition-all duration-200"
    >
      {copied ? (
        <>
          Copied to Clipboard!
          <Check className="h-4 w-4 text-emerald-400 animate-in fade-in zoom-in-75 duration-150" />
        </>
      ) : (
        <>
          design@jedy.cc
          <Copy className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
        </>
      )}
    </Button>
  )
}
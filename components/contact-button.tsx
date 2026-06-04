"use client" // This tells Next.js and Vercel to handle this code on the user's browser

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

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
      // Changed width from an oversized min-w to a fixed, compact w-[180px]
      // Reduced horizontal padding to px-3 to keep the container snug around the elements
      className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 gap-2.5 group whitespace-nowrap h-11 px-3 w-41 inline-flex items-center justify-end transition-all duration-200"
    >
      {copied ? (
        <>
          Email Copied!
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
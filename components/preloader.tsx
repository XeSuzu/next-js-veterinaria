"use client"

import { useEffect, useState } from "react"
import { PawPrintIcon as Paw } from "lucide-react"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="flex flex-col items-center">
        <div className="animate-bounce mb-4">
          <Paw className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-2">PawCare</h1>
        <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-[loader_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  )
}

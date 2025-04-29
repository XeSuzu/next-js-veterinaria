import type React from "react"
import { PawPrintIcon as Paw } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Paw className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PawCare</span>
            <span className="text-sm text-muted-foreground ml-2">Client Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link href="/client-portal" className="text-sm font-medium hover:text-primary">
                Dashboard
              </Link>
              <Link href="/client-portal/pets" className="text-sm font-medium hover:text-primary">
                My Pets
              </Link>
              <Link href="/client-portal/appointments" className="text-sm font-medium hover:text-primary">
                Appointments
              </Link>
              <Link href="/client-portal/medical-records" className="text-sm font-medium hover:text-primary">
                Medical Records
              </Link>
            </nav>
            <ModeToggle />
            <Link href="/auth/login">
              <Button variant="ghost">Sign Out</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted/30">
        <div className="container py-6 md:py-8">{children}</div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Paw className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">© 2023 PawCare. All rights reserved.</p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { Button } from "@/components/ui/button"

"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 mt-7 ml-5">
          <Image src="/logo.png" alt="Dental Solutions Kampala" width={180} height={50} />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"}>
            About Us
          </NavLink>
          <NavLink href="/services" active={pathname === "/services"}>
            Our Services
          </NavLink>
          <NavLink href="/blog" active={pathname === "/blog"}>
            Testimonials
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Call Us</span>
            <Link href="tel:+256762039942" className="text-sm font-bold">
              +256 762 939942
            </Link>
          </div>
          <Button>Book Now</Button>
        </div>
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  active: boolean
  children: React.ReactNode
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-base font-medium transition-colors hover:text-primary",
        active ? "text-primary border-b border-primary" : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  )
}


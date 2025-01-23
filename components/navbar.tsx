"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 mt-7 ml-5">
          <Image
            src="/logo.png"
            alt="Oasis Dental Clinic"
            width={180}
            height={50}
          />
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
          <NavLink href="/testimonials" active={pathname === "/blog"}>
            Testimonials
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact Us
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Call Us</span>
            <Link href="tel:+256762939942" className="text-sm font-bold">
              +256 762 939942
            </Link>
          </div>
          <Button>Book Appointment</Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <NavLink href="/" active={pathname === "/"} onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink
                href="/about"
                active={pathname === "/about"}
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
              <NavLink
                href="/services"
                active={pathname === "/services"}
                onClick={toggleMenu}
              >
                Our Services
              </NavLink>
              <NavLink
                href="/testimonials"
                active={pathname === "/blog"}
                onClick={toggleMenu}
              >
                Testimonials
              </NavLink>
              <NavLink
                href="/contact"
                active={pathname === "/contact"}
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </nav>
            <div className="mt-8 mb-2 space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Call Us</span>
                <Link href="tel:+256762939942" className="text-sm font-bold">
                  +256 762 939942
                </Link>
              </div>
              <Button className="w-full">Book Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, active, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-base font-medium transition-colors hover:text-primary",
        active ? "text-primary" : "text-muted-foreground"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

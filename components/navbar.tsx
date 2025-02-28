"use client";

import { useState, useEffect } from "react";
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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300",
        isSticky
          ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md"
          : "bg-white"
      )}
    >
      <div
        className={cn(
          "container flex h-20 items-center justify-between",
          isSticky && "py-2"
        )}
      >
        <Link href="/" className="flex items-center space-x-2 ml-10">
          <Image
            src="/logo.png"
            alt="Oasis Dental Clinic"
            width={180}
            height={50}
            className="w-[80px] h-[70px]"
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
          <NavLink href="/testimonials" active={pathname === "/testimonials"}>
            Testimonials
          </NavLink>
          <NavLink href="/team" active={pathname === "/team"}>
            Doctors
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact Us
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-blue-800" />
            <span className="text-sm font-medium">Call Us</span>
            <Link
              href="tel:+256752136615"
              className="text-sm font-bold hover:text-blue-800"
            >
              +256 752 136615
            </Link>
          </div>
          <Link href="/booking" className="text-sm font-bold">
            <Button className="bg-blue-800">Book Appointment</Button>
          </Link>
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
                active={pathname === "/testimonials"}
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
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Call Us</span>
                <Link
                  href="tel:+256752136615"
                  className="text-sm font-bold hover:text-blue-800"
                >
                  +256 752 136615
                </Link>
              </div>
              <Link href="/booking" className="mt-2">
                <Button className="w-full bg-blue-500">Book Appointment</Button>
              </Link>
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
        "text-base font-medium transition-colors hover:text-blue-800",
        active ? "text-blue-800" : "text-muted-foreground"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

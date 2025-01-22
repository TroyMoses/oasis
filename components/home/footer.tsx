"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1e2329] text-white px-10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Section */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4 uppercase">Location</h3>
            <div className="space-y-2">
              <h4 className="text-gray-500">Kanjokya</h4>
              <p className="text-gray-500">Plot 56, Kanjokya Street, Kamwokya near Ark House.</p>

              <h4 className="text-gray-500 mt-4">City center</h4>
              <p className="text-gray-500">Bhatia chambers.</p>
              <p className="text-gray-500">Plot 5 Parliamentary avenue, Kampala.</p>
            </div>

            <div className="mt-6">
              <h4 className="text-gray-200 mb-2 uppercase">Contacts</h4>
              <div className="space-y-2">
                <Link
                  href="mailto:info@kaysdentalclinic.com"
                  className="text-gray-500 hover:text-gray-400 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@kaysdentalclinic.com
                </Link>
                <Link href="tel:+256200741500" className="text-gray-500 hover:text-gray-400 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +256 200 741500
                </Link>
                <Link href="tel:+256750639308" className="text-gray-500 hover:text-gray-400 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +256 750 639 308
                </Link>
                <p className="text-gray-500 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +256 772 639308 (WhatsApp)
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="pl-10">
            <h3 className="text-gray-200 font-semibold mb-4 uppercase">Opening Hours</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-gray-500">Monday - Friday</p>
                  <p className="text-gray-500">08:00am - 05:00pm</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-gray-500">Saturday</p>
                  <p className="text-gray-500">08:00am - 04:00pm</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-gray-500">Sunday</p>
                  <p className="text-gray-500">10:00am - 03:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Maps Section */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4 uppercase">Our Locations</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-400 mb-2">Kanjokya Street</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573!2d32.5947!3d0.3356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjAnMjguNCJOIDMywrAzNSc0MC45IkU!5e0!3m2!1sen!2sug!4v1234567890!5m2!1sen!2sug"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                />
              </div>
              <div>
                <h4 className="text-gray-400 mb-2">Bhatia Chambers</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573!2d32.5947!3d0.3356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjAnMjguNCJOIDMywrAzNSc0MC45IkU!5e0!3m2!1sen!2sug!4v1234567890!5m2!1sen!2sug"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container py-6 px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">Dental Solutions Kampala © 2024 | all rights reserved</p>
            <div className="flex gap-4 mr-[165px]">
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


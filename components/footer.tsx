"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#1e2329] text-white px-10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Section */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4 uppercase">
              Location
            </h3>
            <div className="space-y-2">
              <h4 className="text-gray-500">Makerere Kavule</h4>
              <p className="text-gray-500">Head Offices Station;</p>
              <p className="text-gray-500">Next to National Unity Platform,</p>
              <p className="text-gray-500">Near Tosha Petrol Station.</p>
            </div>

            <div className="mt-6">
              <h4 className="text-gray-200 mb-2 uppercase">Contacts</h4>
              <div className="space-y-2">
                <Link
                  href="mailto:oasisdentalspa256@gmail.com"
                  className="text-gray-500 hover:text-gray-400 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  oasisdentalspa256@gmail.com
                </Link>
                <Link
                  href="tel:+256752136615"
                  className="text-gray-500 hover:text-gray-400 flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +256 752 136615
                </Link>
                <Link
                  href="tel:+256776295077"
                  className="text-gray-500 hover:text-gray-400 flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +256 776 295077
                </Link>
              </div>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="pl-10">
            <h3 className="text-gray-200 font-semibold mb-4 uppercase">
              Opening Hours
            </h3>
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
            <h3 className="text-gray-200 font-semibold mb-4 uppercase">
              Our Location
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-400 mb-2">Makerer Kavule</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.490583134029!2d32.55795677770996!3d0.3466640000000188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb689a09f443%3A0xd111c355a38c1daa!2sOasis%20Dental%20SPA!5e0!3m2!1sen!2sug!4v1737908347688!5m2!1sen!2sug"
                  width="100%"
                  height="300"
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
        <div className="container py-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              Oasis Dental SPA © 2025 | All rights reserved
            </p>
            <div className="flex gap-4 md:mr-[165px]">
              <Link href="https://www.tiktok.com/@cathy.oasisdentalclinic?_t=ZM-8tpbq7Myed5&_r=1" className="text-gray-400 hover:text-primary">
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
              <Link href="https://www.instagram.com/oasisdentalclinics?igsh=YWF4dHhzM3BqZTh5&utm_source=qr" className="text-gray-400 hover:text-primary">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="https://www.threads.net/@oasisdentalclinics?invite=0" className="text-gray-400 hover:text-primary">
                <FontAwesomeIcon icon={faThreads} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

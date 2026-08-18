import { Smile, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Siren } from 'lucide-react';
import { contactInfo, navLinks, footerServices } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-100">
      <div className="container-px py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 - brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
                <Smile className="h-6 w-6" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                MARKLAND <span className="text-teal-300">DENTISTRY</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-teal-200">
              Compassionate, modern dental care for the whole family. Your healthy, confident smile
              is our priority — from first checkup to lifelong care.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-800 text-teal-200 transition-colors hover:bg-amber-500 hover:text-teal-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-teal-200 transition-colors hover:text-amber-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-teal-200 transition-colors hover:text-amber-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-amber-300" />
                <a href={`tel:${contactInfo.phoneRaw}`} className="text-teal-200 hover:text-amber-300">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-amber-300" />
                <a href={`mailto:${contactInfo.email}`} className="break-all text-teal-200 hover:text-amber-300">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-amber-300" />
                <span className="text-teal-200">{contactInfo.address}</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2 rounded-xl bg-amber-500/15 px-4 py-3">
              <Siren className="h-4 w-4 flex-none text-amber-400" />
              <p className="text-xs font-semibold text-amber-200">
                24/7 emergency line: {contactInfo.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-teal-800">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-teal-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Markland Dentistry. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-amber-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-amber-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

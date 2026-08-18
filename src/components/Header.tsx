import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  CalendarHeart,
  ChevronDown,
  Smile,
} from 'lucide-react';
import { navLinks, contactInfo, services } from '@/data';

interface HeaderProps {
  onBook: () => void;
}

export default function Header({ onBook }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-teal-700 text-white md:block">
        <div className="container-px flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 transition-colors hover:text-amber-300">
              <Mail className="h-3.5 w-3.5" />
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phoneRaw}`} className="flex items-center gap-1.5 transition-colors hover:text-amber-300">
              <Phone className="h-3.5 w-3.5" />
              {contactInfo.phone}
            </a>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-amber-500/90 px-3 py-0.5 font-semibold text-teal-900">
            <CalendarHeart className="h-3.5 w-3.5" />
            Now Accepting New Patients & CDCP Coverage
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-px flex h-16 items-center justify-between lg:h-20">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white shadow-soft">
              <Smile className="h-6 w-6" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-teal-800 lg:text-xl">
              MARKLAND <span className="text-teal-500">DENTISTRY</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-50 hover:text-teal-600"
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </a>
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3">
                      <div className="grid grid-cols-2 gap-1 rounded-2xl border border-teal-100 bg-white p-3 shadow-lift">
                        {services.map((s) => (
                          <a
                            key={s.title}
                            href="#services"
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-teal-50"
                          >
                            <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                              <s.icon className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-teal-800">{s.title}</span>
                              <span className="block text-xs text-teal-500">{s.category}</span>
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-50 hover:text-teal-600"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={onBook} className="btn-amber hidden sm:inline-flex">
              <CalendarHeart className="h-4 w-4" />
              Book Appointment
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-teal-800 transition-colors hover:bg-teal-50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-teal-900/40 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-lift transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-teal-100 px-5 py-4">
            <span className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
                <Smile className="h-5 w-5" />
              </span>
              <span className="font-extrabold text-teal-800">MARKLAND</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-teal-800 hover:bg-teal-50"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-teal-800 transition-colors hover:bg-teal-50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 border-t border-teal-100 pt-3">
              <p className="px-4 pb-2 text-xs font-bold uppercase tracking-wider text-teal-400">Our Services</p>
              {services.map((s) => (
                <a
                  key={s.title}
                  href="#services"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-teal-700 hover:bg-teal-50"
                >
                  <s.icon className="h-4 w-4 text-teal-500" />
                  {s.title}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-teal-100 p-4">
            <button
              onClick={() => {
                setMobileOpen(false);
                onBook();
              }}
              className="btn-amber w-full"
            >
              <CalendarHeart className="h-4 w-4" />
              Book Appointment
            </button>
            <div className="mt-3 space-y-1 px-1 text-center text-xs text-teal-500">
              <a href={`tel:${contactInfo.phoneRaw}`} className="block font-semibold text-teal-700">
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="block">
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Phone, ArrowRight, Star } from 'lucide-react';
import { heroBadges, contactInfo } from '@/data';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-teal-50 pt-28 lg:pt-36">
      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 pb-20 lg:grid-cols-2 lg:pb-28">
        {/* Left */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-teal-700 backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            Trusted family dental care in Markham
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-teal-900 sm:text-5xl lg:text-6xl">
            Your Perfect Smile <span className="text-teal-600">Starts Here</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-teal-700">
            From urgent pain relief to long-term preventive care, Markland Dentistry provides
            compassionate, modern dental care for the whole family.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`tel:${contactInfo.phoneRaw}`} className="btn-amber">
              <Phone className="h-4 w-4" />
              Call Our Office
            </a>
            <button onClick={onExplore} className="btn-outline">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-teal-600">
            <div>
              <p className="text-2xl font-extrabold text-teal-800">15+</p>
              <p>Years of care</p>
            </div>
            <div className="h-10 w-px bg-teal-200" />
            <div>
              <p className="text-2xl font-extrabold text-teal-800">8k+</p>
              <p>Happy patients</p>
            </div>
            <div className="h-10 w-px bg-teal-200" />
            <div>
              <p className="text-2xl font-extrabold text-teal-800">4.9</p>
              <p>Average rating</p>
            </div>
          </div>
        </div>

        {/* Right - feature highlight card */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-teal-200 bg-teal-100/50" />
            <div className="relative rounded-2xl border border-teal-100 bg-white p-6 shadow-lift sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-teal-800">Why patients choose us</h3>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                  CDCP Accepted
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {heroBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="group flex items-start gap-3 rounded-xl border border-teal-50 bg-teal-50/60 p-4 transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white hover:shadow-soft"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-teal-600 text-white transition-transform group-hover:scale-110">
                      <badge.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold leading-snug text-teal-800">{badge.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-teal-700 p-4 text-white">
                <Phone className="h-5 w-5 flex-none text-amber-300" />
                <div className="text-sm">
                  <p className="font-semibold">Dental emergency?</p>
                  <p className="text-teal-100">Same-day appointments available.</p>
                </div>
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="ml-auto rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-teal-900 transition-colors hover:bg-amber-400"
                >
                  Call now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}

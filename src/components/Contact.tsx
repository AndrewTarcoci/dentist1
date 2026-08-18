import { Phone, Mail, MapPin, Clock, Siren } from 'lucide-react';
import { contactInfo, officeHours } from '@/data';
import AppointmentForm from './AppointmentForm';

export default function Contact() {
  return (
    <section id="contact" className="bg-teal-50 py-20 lg:py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Get in touch</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-teal-900 sm:text-4xl">
            Ready for a Healthier Smile?
          </h2>
          <p className="mt-4 text-teal-600">
            Book your visit in seconds. Submit a request below or reach us by phone — we're here
            to help you smile with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <AppointmentForm />

          {/* Location & hours card */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-teal-100 bg-white p-6 shadow-soft sm:p-8">
              <h3 className="text-lg font-bold text-teal-900">Visit Our Office</h3>
              <div className="mt-5 space-y-4">
                <a href={`tel:${contactInfo.phoneRaw}`} className="flex items-center gap-3 group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-teal-400">Phone</span>
                    <span className="font-semibold text-teal-800">{contactInfo.phone}</span>
                  </span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-teal-400">Email</span>
                    <span className="font-semibold text-teal-800">{contactInfo.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-teal-400">Address</span>
                    <span className="font-semibold text-teal-800">{contactInfo.address}</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-xl bg-amber-50 p-4">
                <Siren className="h-5 w-5 flex-none text-amber-600" />
                <p className="text-sm font-medium text-amber-800">
                  Dental emergency? Call us — we reserve same-day slots for urgent care.
                </p>
              </div>
            </div>

            {/* Office hours */}
            <div className="rounded-2xl border border-teal-100 bg-white p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-teal-600" />
                <h3 className="text-lg font-bold text-teal-900">Office Hours</h3>
              </div>
              <ul className="mt-4 divide-y divide-teal-50">
                {officeHours.map((row) => (
                  <li key={row.day} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="font-semibold text-teal-800">{row.day}</span>
                    <span className={row.hours === 'Closed' ? 'text-teal-400' : 'text-teal-600'}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-soft">
              <div className="relative h-56 w-full bg-teal-100">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0,122,120,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,122,120,0.08) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-teal-600 text-white shadow-lift">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <p className="mt-2 text-sm font-semibold text-teal-800">Markland Dentistry</p>
                  <p className="text-xs text-teal-500">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

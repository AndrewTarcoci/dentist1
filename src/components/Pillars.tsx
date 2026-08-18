import { pillars } from '@/data';

export default function Pillars() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Why us</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-teal-900 sm:text-4xl">
            Why Choose Markland Dentistry
          </h2>
          <p className="mt-4 text-teal-600">
            We combine modern technology with genuine, patient-first care to make every visit
            comfortable, transparent, and effective.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-teal-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-lift"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                <pillar.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-teal-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-teal-600">{pillar.description}</p>
              <span className="absolute bottom-0 left-7 h-1 w-0 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

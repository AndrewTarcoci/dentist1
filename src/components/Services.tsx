import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { services, serviceCategories, type ServiceCategory } from '@/data';

export default function Services() {
  const [active, setActive] = useState<ServiceCategory>('All');

  const filtered =
    active === 'All' ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="bg-teal-50 py-20 lg:py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Our services</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-teal-900 sm:text-4xl">
            Our Dental Services
          </h2>
          <p className="mt-4 text-teal-600">
            From cosmetic enhancements to emergency relief, every treatment is tailored to your
            comfort and long-term oral health.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-teal-600 text-white shadow-soft'
                  : 'bg-white text-teal-700 hover:bg-teal-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-teal-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                  <service.icon className="h-7 w-7" />
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                  {service.category}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-teal-900">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-teal-600">{service.description}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-amber-600"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

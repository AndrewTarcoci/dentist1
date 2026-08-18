import { CheckCircle2, ShieldCheck, HeartHandshake, Users } from 'lucide-react';

const points = [
  { icon: HeartHandshake, text: 'Patient-centered care for adults and children alike' },
  { icon: ShieldCheck, text: 'Modern sterilization standards and hospital-grade safety' },
  { icon: Users, text: 'Personalized treatment plans built around your goals' },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left - feature graphic */}
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-2xl bg-teal-100" />
          <div className="relative overflow-hidden rounded-2xl shadow-lift">
            <img
              src="https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Modern, welcoming dental clinic interior"
              className="h-[420px] w-full object-cover lg:h-[500px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent" />
          </div>
          {/* floating stat card */}
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-teal-100 bg-white p-5 shadow-lift sm:right-auto sm:w-72">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="text-2xl font-extrabold text-teal-800">100%</p>
                <p className="text-sm text-teal-600">Sterilization compliance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - story */}
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">About us</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-teal-900 sm:text-4xl">
            A Modern Approach to Dentistry
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-teal-700">
            At Markland Dentistry, we believe dental care should feel calm, clear, and genuinely
            caring. Our welcoming clinic blends a relaxed atmosphere with modern technology so every
            visit is efficient and comfortable.
          </p>
          <p className="mt-4 leading-relaxed text-teal-600">
            From your child's first checkup to advanced restorative work, we build personalized
            treatment plans around your needs — backed by rigorous sterilization standards and a
            team that treats you like family.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.text} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-500" />
                <span className="text-teal-700">{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-amber">
              Schedule a Visit
            </a>
            <a href="#services" className="btn-outline">
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

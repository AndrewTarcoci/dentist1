import { FileText, CreditCard, HeartPulse, ClipboardList, ShieldCheck, Baby } from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: 'New Patient Forms',
    text: 'Save time at your first visit by completing your intake forms online before you arrive.',
  },
  {
    icon: CreditCard,
    title: 'Insurance & CDCP',
    text: "We accept the Canadian Dental Care Plan and major insurance providers. We'll bill your insurer directly when possible.",
  },
  {
    icon: HeartPulse,
    title: 'What to Expect',
    text: 'Your first appointment includes a comprehensive exam, digital X-rays, and a personalized care plan — no pressure, no surprises.',
  },
  {
    icon: Baby,
    title: 'Kids Welcome',
    text: 'We make first visits fun and gentle so children build healthy, confident habits for life.',
  },
  {
    icon: ClipboardList,
    title: 'Flexible Payment Plans',
    text: "Don't have insurance? Ask about our in-house payment options designed to fit your budget.",
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Sterilization',
    text: 'We follow hospital-grade sterilization protocols and modern infection-control standards on every instrument, every visit.',
  },
];

export default function PatientInfo() {
  return (
    <section id="patient-info" className="bg-white py-20 lg:py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Patient info</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-teal-900 sm:text-4xl">
            Everything You Need Before You Visit
          </h2>
          <p className="mt-4 text-teal-600">
            From insurance and forms to what to expect, we make your first visit simple and
            stress-free.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <div
              key={r.title}
              className="group rounded-2xl border border-teal-100 bg-teal-50/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-teal-600 shadow-soft transition-all group-hover:bg-teal-600 group-hover:text-white">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-bold text-teal-900">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-teal-600">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

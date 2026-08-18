import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, AlertCircle, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { serviceOptions } from '@/data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const timeSlots = [
  'Morning (8am–12pm)',
  'Afternoon (12pm–4pm)',
  'Late Afternoon (4pm–7pm)',
  'Saturday (9am–2pm)',
];

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      full_name: String(data.get('full_name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      service_needed: String(data.get('service_needed') ?? '').trim(),
      preferred_date: String(data.get('preferred_date') ?? '').trim(),
      preferred_time: String(data.get('preferred_time') ?? '').trim(),
      additional_notes: String(data.get('additional_notes') ?? '').trim() || null,
    };

    if (!payload.full_name || !payload.email || !payload.phone || !payload.service_needed || !payload.preferred_date || !payload.preferred_time) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');
    const { error } = await supabase.from('appointment_requests').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your request. Please call us instead.');
      return;
    }
    setStatus('success');
    form.reset();
  };

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-teal-100 bg-white p-10 text-center shadow-soft">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-teal-900">Request received!</h3>
        <p className="mt-2 max-w-sm text-teal-600">
          Thank you — our front desk will reach out within one business day to confirm your
          appointment. For urgent care, please call us directly.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-outline mt-6">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-teal-100 bg-white p-6 shadow-soft sm:p-8"
    >
      <h3 className="text-xl font-bold text-teal-900">Request an Appointment</h3>
      <p className="mt-1 text-sm text-teal-600">
        Fill in your details and we'll confirm your booking shortly.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="full_name" placeholder="Jane Doe" required />
        <Field label="Email Address" name="email" type="email" placeholder="jane@email.com" required />
        <Field label="Phone Number" name="phone" type="tel" placeholder="(905) 555-0123" required />
        <SelectField label="Service Needed" name="service_needed" options={serviceOptions} required />
        <Field label="Preferred Date" name="preferred_date" type="date" required />
        <SelectField label="Preferred Time" name="preferred_time" options={timeSlots} required />
      </div>
      <div className="mt-4">
        <label htmlFor="additional_notes" className="mb-1.5 block text-sm font-semibold text-teal-800">
          Additional Notes
        </label>
        <textarea
          id="additional_notes"
          name="additional_notes"
          rows={3}
          placeholder="Tell us about your symptoms or any concerns…"
          className="w-full rounded-xl border border-teal-200 bg-teal-50/40 px-4 py-3 text-sm text-teal-900 placeholder-teal-400 outline-none transition-colors focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200"
        />
      </div>

      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle className="h-4 w-4 flex-none" />
          {errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-amber mt-6 w-full disabled:opacity-70">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Appointment Request
          </>
        )}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

function Field({ label, name, type = 'text', placeholder, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-teal-800">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-teal-200 bg-teal-50/40 px-4 py-3 text-sm text-teal-900 placeholder-teal-400 outline-none transition-colors focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

function SelectField({ label, name, options, required }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-teal-800">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-teal-200 bg-teal-50/40 px-4 py-3 text-sm text-teal-900 outline-none transition-colors focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

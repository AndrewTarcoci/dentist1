import {
  Sparkles,
  ShieldCheck,
  Layers,
  Clock,
  Sun,
  Wrench,
  FilePlus,
  Crown,
  Gem,
  Siren,
  Phone,
  Mail,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

export type ServiceCategory = 'All' | 'Cosmetic' | 'Restorative' | 'Emergency';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  category: Exclude<ServiceCategory, 'All'>;
}

export const services: Service[] = [
  {
    icon: Sun,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, confident smile.',
    category: 'Cosmetic',
  },
  {
    icon: Wrench,
    title: 'Cosmetic Dental Bonding',
    description: 'Fast, non-invasive repair for minor chips, gaps, and imperfections.',
    category: 'Cosmetic',
  },
  {
    icon: FilePlus,
    title: 'Composite Fillings',
    description: 'Tooth-colored fillings for natural-looking, seamless results.',
    category: 'Restorative',
  },
  {
    icon: Gem,
    title: 'Dental Veneers & Crowns',
    description: 'Custom porcelain enhancements and restorations tailored to you.',
    category: 'Cosmetic',
  },
  {
    icon: Crown,
    title: 'Porcelain Crowns (Caps)',
    description: 'Durable, natural-looking protection for damaged or weakened teeth.',
    category: 'Restorative',
  },
  {
    icon: Siren,
    title: 'Urgent Dental Care',
    description: 'Immediate treatment for unexpected dental emergencies and pain.',
    category: 'Emergency',
  },
];

export const serviceCategories: ServiceCategory[] = ['All', 'Cosmetic', 'Restorative', 'Emergency'];

export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const pillars: Pillar[] = [
  {
    icon: Sparkles,
    title: 'Gentle & Stress-Free Care',
    description: 'Modern equipment designed for maximum patient comfort at every visit.',
  },
  {
    icon: ShieldCheck,
    title: 'Subsidized & Flexible Billing',
    description: 'Full support for the Canadian Dental Care Plan (CDCP) and major insurance providers.',
  },
  {
    icon: Layers,
    title: 'Comprehensive Treatments',
    description: 'Full-spectrum dental services under one roof for every member of the family.',
  },
  {
    icon: Clock,
    title: 'Emergency Dental Relief',
    description: 'Priority same-day appointments for urgent care and unexpected toothaches.',
  },
];

export interface HeroBadge {
  icon: LucideIcon;
  label: string;
}

export const heroBadges: HeroBadge[] = [
  { icon: Sparkles, label: 'Invisalign Certified' },
  { icon: ShieldCheck, label: 'CDCP Government Care Accepted' },
  { icon: Layers, label: 'Pediatric & Family Dentistry' },
  { icon: Siren, label: 'Emergency Care Available' },
];

export const contactInfo = {
  phone: '(905) 500-0722',
  phoneRaw: '9055000722',
  email: 'info@marklanddentistry.ca',
  address: '1200 Markland Street, Unit 5, Markham, ON L6C 1X7',
};

export const officeHours = [
  { day: 'Monday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 7:00 PM' },
  { day: 'Thursday', hours: '8:00 AM – 7:00 PM' },
  { day: 'Friday', hours: '8:00 AM – 4:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Patient Info', href: '#patient-info' },
  { label: 'Contact', href: '#contact' },
];

export const footerServices = [
  'Teeth Whitening',
  'Cosmetic Dental Bonding',
  'Composite Fillings',
  'Dental Veneers & Crowns',
  'Porcelain Crowns (Caps)',
  'Urgent Dental Care',
];

export const serviceOptions = [
  'Teeth Whitening',
  'Cosmetic Dental Bonding',
  'Composite Fillings',
  'Dental Veneers & Crowns',
  'Porcelain Crowns (Caps)',
  'Urgent Dental Care',
  'General Checkup',
  'Other',
];

export const icons = { Phone, Mail, MapPin };

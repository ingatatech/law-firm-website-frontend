// Mock data — shaped exactly like your Prisma models.
// When the backend API is ready, replace these imports with fetch() calls
// to the matching endpoints (see BACKEND_ANALYSIS.md). The field names
// below match your schema.prisma field-for-field, so components won't
// need to change when you swap this for real data.

export const practiceAreas = [
  {
    id: 1,
    name: 'Corporate & Commercial Law',
    slug: 'corporate-commercial',
    image: '/images/practice-areas/corporate.jpg',
    headline: 'Legal Support for Your Business',
    description:
      'We support businesses and organizations with commercial transactions, contracts, corporate governance, and business structures.',
    services: [
      'Company formation',
      'Corporate governance',
      'Commercial contracts',
      'Business transactions',
      'Mergers and acquisitions',
      'Regulatory matters'
    ]
  },
  {
    id: 2,
    name: 'Litigation & Dispute Resolution',
    slug: 'litigation',
    image: '/images/practice-areas/litigation.jpg',
    headline: 'Strategic Representation When Disputes Arise',
    description:
      'Legal representation and dispute-resolution services for civil, commercial, and other approved matters.',
    services: ['Litigation', 'Arbitration', 'Mediation', 'Commercial disputes', 'Negotiation']
  },
  {
    id: 3,
    name: 'Employment & Labour Law',
    slug: 'employment',
    image: '/images/practice-areas/employment.jpg',
    headline: 'Practical Legal Support for Employment Matters',
    description:
      'Assistance for employers and employees with applicable employment-related legal matters.',
    services: ['Employment contracts', 'Workplace policies', 'Labour compliance', 'Termination matters']
  },
  {
    id: 4,
    name: 'Family Law',
    slug: 'family-law',
    image: '/images/practice-areas/family.jpg',
    headline: 'Professional Guidance Through Important Family Matters',
    description: 'Legal support for approved family-related matters.',
    services: ['Divorce', 'Child custody', 'Maintenance', 'Matrimonial property', 'Succession-related matters']
  },
  {
    id: 5,
    name: 'Real Estate & Property Law',
    slug: 'real-estate',
    image: '/images/practice-areas/real-estate.jpg',
    headline: 'Legal Guidance for Property Matters',
    description: 'Legal services relating to property transactions, ownership, and development.',
    services: ['Property transactions', 'Sale and purchase agreements', 'Leases', 'Property disputes']
  },
  {
    id: 6,
    name: 'Intellectual Property',
    slug: 'intellectual-property',
    image: '/images/practice-areas/intellectual-property.jpg',
    headline: 'Protecting Your Intellectual Assets',
    description: 'Protection, management, and enforcement of intellectual-property rights.',
    services: ['Trademarks', 'Copyright', 'Licensing', 'IP disputes', 'Brand protection']
  }
]

export const attorneys = [
  {
    id: 1,
    fullName: '[Attorney Name]',
    title: 'Senior Partner',
    photoUrl: null,
    bio: '[Attorney Name] leads the firm\'s corporate practice, advising businesses across East Africa on transactions and governance.',
    education: 'LLB, University of Rwanda — LLM, University of Cape Town',
    barAdmission: 'Rwanda Bar Association',
    email: 'xxx@example-law.rw',
    practiceAreaIds: [1, 6]
  },
  {
    id: 2,
    fullName: '[Attorney Name]',
    title: 'Partner, Litigation',
    photoUrl: null,
    bio: '[Attorney Name] represents clients in commercial and civil disputes, with a focus on arbitration and mediation.',
    education: 'LLB, University of Rwanda',
    barAdmission: 'Rwanda Bar Association',
    email: 'xxx@example-law.rw',
    practiceAreaIds: [2]
  },
  {
    id: 3,
    fullName: '[Attorney Name]',
    title: 'Associate',
    photoUrl: null,
    bio: '[Attorney Name] advises on employment and family law matters, working closely with individual and corporate clients.',
    education: 'LLB, Kigali Independent University',
    barAdmission: 'Rwanda Bar Association',
    email: 'xxx@example-law.rw',
    practiceAreaIds: [3, 4]
  }
]

export const articles = [
  {
    id: 1,
    title: 'What to Expect During an Initial Legal Consultation',
    slug: 'initial-legal-consultation',
    summary: 'A plain-language guide to what happens when you first contact a law firm.',
    content:
      'When you reach out for a first consultation, the firm reviews your inquiry, checks for any conflicts of interest, and — where appropriate — arranges a meeting to discuss your matter in more detail. This initial step does not by itself create a lawyer-client relationship...',
    authorId: 1,
    practiceAreaId: 1,
    status: 'published',
    publishedAt: '2026-06-01'
  },
  {
    id: 2,
    title: 'Understanding Commercial Contract Basics',
    slug: 'commercial-contract-basics',
    summary: 'Key terms every business owner should understand before signing a contract.',
    content:
      'A commercial contract sets out the rights and obligations of each party. Before signing, it is worth understanding key terms such as consideration, termination clauses, and dispute-resolution mechanisms...',
    authorId: 1,
    practiceAreaId: 1,
    status: 'published',
    publishedAt: '2026-05-15'
  },
  {
    id: 3,
    title: 'Employment Contracts: What Employees Should Know',
    slug: 'employment-contracts-basics',
    summary: 'A short guide to reading and understanding your employment contract.',
    content:
      'Your employment contract should clearly state your role, compensation, working hours, and termination conditions. If any of these are unclear, it is worth seeking clarification before signing...',
    authorId: 3,
    practiceAreaId: 3,
    status: 'published',
    publishedAt: '2026-04-22'
  }
]

export const faqs = [
  {
    id: 1,
    question: 'What areas of law does the firm handle?',
    answer:
      'We handle Corporate & Commercial Law, Litigation & Dispute Resolution, Employment Law, Family Law, Real Estate Law, and Intellectual Property. See our Practice Areas page for details.',
    orderIndex: 1
  },
  {
    id: 2,
    question: 'How can I request a consultation?',
    answer:
      'Use the "Request a Consultation" form on our website, or contact us directly by phone or email. A member of our team will review your request.',
    orderIndex: 2
  },
  {
    id: 3,
    question: 'Does submitting an inquiry create a lawyer-client relationship?',
    answer:
      'No. Submitting an inquiry or consultation request does not by itself establish a lawyer-client relationship. Representation begins only once the firm formally agrees to act for you.',
    orderIndex: 3
  },
  {
    id: 4,
    question: 'How are legal fees determined?',
    answer:
      'Fees depend on the nature and complexity of your matter. This is discussed and agreed upon during your initial consultation.',
    orderIndex: 4
  },
  {
    id: 5,
    question: 'Where is the firm located?',
    answer: 'Our office is in Kigali, Rwanda. See our Contact page for the full address and map.',
    orderIndex: 5
  }
]

export const officeInfo = {
  firmName: 'Ingata Legal Chambers',
  address: 'KG 7 Ave, Kigali, Rwanda',
  phone: '+250 788 000 000',
  email: 'info@example-law.rw',
  officeHours: 'Monday – Friday, 8:00 AM – 5:00 PM'
}

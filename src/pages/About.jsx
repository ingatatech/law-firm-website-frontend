import Layout from '../components/Layout'
import { officeInfo } from '../data/mockData'

const values = ['Integrity', 'Professionalism', 'Client Focus', 'Confidentiality', 'Excellence', 'Transparency']

export default function About() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-ink/10">
        <img
          src="/images/about-law-firm.jpg"
          alt="Our legal team reviewing a client matter together"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-sm font-medium uppercase tracking-wide text-brass">About Us</p>
          <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-paperLight md:text-4xl">
            {officeInfo.firmName} is a professional legal practice serving individuals, businesses, and
            organizations.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-serif text-xl font-semibold text-ink">Our Mission</h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted">
              To provide professional, ethical, and client-focused legal services that help individuals,
              businesses, and organizations navigate legal challenges and achieve their objectives.
            </p>

            <h2 className="mt-10 font-serif text-xl font-semibold text-ink">Our Vision</h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted">
              To be a trusted and respected legal partner known for professional excellence, integrity,
              and client-focused service.
            </p>

            <h2 className="mt-10 font-serif text-xl font-semibold text-ink">Our Approach</h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted">
              We approach every legal matter with careful analysis, clear communication, and attention to
              each client's specific objectives — from initial inquiry through resolution.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">Core Values</h2>
            <ul className="mt-4 space-y-3">
              {values.map((value) => (
                <li key={value} className="border-l-2 border-brass pl-3 text-sm text-ink">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PracticeAreaCard from '../components/PracticeAreaCard'
import ArticleCard from '../components/ArticleCard'
import { practiceAreas, articles, faqs } from '../data/mockData'

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      {/* Hero */}
<section className="relative overflow-hidden border-b border-ink/10">
  <img
    src="/images/hero-law-firm.jpg"
    alt="Professional legal consultation"
    className="absolute inset-0 h-full w-full object-cover"
  />
  <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
  <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
    <p className="text-sm font-medium uppercase tracking-wide text-brass">
      Experience. Integrity. Results.
    </p>
    <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-paperLight md:text-5xl">
      Trusted legal counsel. Strategic representation.
    </h1>
    <p className="mt-5 max-w-prose text-base leading-relaxed text-paperLight/80">
      We provide professional legal services and strategic counsel to individuals, businesses,
      and organizations across Rwanda.
    </p>
    <div className="mt-8 flex flex-wrap gap-4">
      <Link
        to="/consultation"
        className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-paperLight transition-colors hover:bg-accent-dark"
      >
        Request a Consultation
      </Link>
      <Link
        to="/practice-areas"
        className="border border-paperLight/40 px-6 py-3 text-sm font-medium text-paperLight transition-colors hover:border-paperLight hover:bg-paperLight/10"
      >
        Explore Our Practice Areas
      </Link>
    </div>
  </div>
</section>

      {/* Practice areas */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-prose">
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">Practice Areas</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Legal services across the matters that affect individuals, businesses, and institutions most.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.id} area={area} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-ink/10 bg-ink text-paperLight">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">Why Choose Us</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Professional Expertise', 'Our legal professionals bring knowledge and experience across relevant areas of law.'],
              ['Client Focus', 'We seek to understand each client\u2019s objectives and provide solutions aligned with their needs.'],
              ['Integrity', 'We maintain high professional and ethical standards in every matter we handle.'],
              ['Responsiveness', 'We aim to provide clear and timely communication throughout the engagement.']
            ].map(([title, body]) => (
              <div key={title} className="border-t border-brass/40 pt-5">
                <h3 className="font-serif text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paperLight/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">Legal Insights</h2>
          <Link to="/insights" className="text-sm font-medium text-accent">View all ›</Link>
        </div>
        <div className="mt-8 max-w-3xl">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* FAQs preview */}
      <section className="border-t border-ink/10 bg-paperLight">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl divide-y divide-ink/10">
            {faqs.slice(0, 3).map((faq) => (
              <div key={faq.id} className="py-5">
                <h3 className="font-medium text-ink">{faq.question}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
          <Link to="/faqs" className="mt-6 inline-block text-sm font-medium text-accent">
            View all FAQs ›
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
          Ready to discuss your legal matter?
        </h2>
        <Link
          to="/consultation"
          className="mt-6 inline-block border border-accent bg-accent px-8 py-3 text-sm font-medium text-paperLight transition-colors hover:bg-accent-dark"
        >
          Request a Consultation
        </Link>
      </section>
    </Layout>
  )
}
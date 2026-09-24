import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { practiceAreas, attorneys } from '../data/mockData'

export default function PracticeAreaDetail() {
  const { slug } = useParams()
  const area = practiceAreas.find((a) => a.slug === slug)
  const relatedAttorneys = area
    ? attorneys.filter((at) => at.practiceAreaIds.includes(area.id))
    : []

  if (!area) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="font-serif text-2xl font-semibold text-ink">Practice area not found</h1>
          <Link to="/practice-areas" className="mt-4 inline-block text-sm text-accent">
            ‹ Back to Practice Areas
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-ink/10">
        <img
          src={area.image}
          alt={area.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <Link to="/practice-areas" className="text-sm text-paperLight/80 hover:text-paperLight">
            ‹ Practice Areas
          </Link>
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-brass">{area.headline}</p>
          <h1 className="mt-2 max-w-2xl font-serif text-3xl font-semibold text-paperLight md:text-4xl">
            {area.name}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="max-w-prose text-sm leading-relaxed text-ink-muted">{area.description}</p>

            <h2 className="mt-10 font-serif text-lg font-semibold text-ink">Services</h2>
            <ul className="mt-4 space-y-2">
              {area.services.map((service) => (
                <li key={service} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {service}
                </li>
              ))}
            </ul>

            <Link
              to="/consultation"
              className="mt-10 inline-block border border-accent bg-accent px-6 py-3 text-sm font-medium text-paperLight transition-colors hover:bg-accent-dark"
            >
              Discuss Your Legal Matter
            </Link>
          </div>

          {relatedAttorneys.length > 0 && (
            <div>
              <h2 className="font-serif text-lg font-semibold text-ink">Related Attorneys</h2>
              <div className="mt-4 space-y-4">
                {relatedAttorneys.map((attorney) => (
                  <Link
                    key={attorney.id}
                    to={`/attorneys/${attorney.id}`}
                    className="block border border-ink/15 p-4 hover:border-accent"
                  >
                    <p className="font-medium text-ink">{attorney.fullName}</p>
                    <p className="text-sm text-ink-muted">{attorney.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
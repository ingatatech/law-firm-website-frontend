import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { attorneys, practiceAreas } from '../data/mockData'

export default function AttorneyDetail() {
  const { id } = useParams()
  const attorney = attorneys.find((a) => a.id === Number(id))

  if (!attorney) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="font-serif text-2xl font-semibold text-ink">Attorney not found</h1>
          <Link to="/attorneys" className="mt-4 inline-block text-sm text-accent">‹ Back to Our Team</Link>
        </div>
      </Layout>
    )
  }

  const attorneyPracticeAreas = practiceAreas.filter((pa) =>
    attorney.practiceAreaIds.includes(pa.id)
  )
  const initials = attorney.fullName.split(' ').map((n) => n[0]).join('')

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link to="/attorneys" className="text-sm text-accent">‹ Our Team</Link>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex aspect-[4/5] items-center justify-center border border-ink/15 bg-paper text-5xl font-serif text-ink/40">
              {initials}
            </div>
            {attorney.email && (
              <a href={`mailto:${attorney.email}`} className="mt-4 block text-center text-sm text-accent">
                {attorney.email}
              </a>
            )}
          </div>

          <div className="md:col-span-2">
            <h1 className="font-serif text-3xl font-semibold text-ink">{attorney.fullName}</h1>
            <p className="mt-1 text-brass">{attorney.title}</p>

            <p className="mt-6 max-w-prose text-sm leading-relaxed text-ink-muted">{attorney.bio}</p>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-ink">Education</dt>
                <dd className="text-ink-muted">{attorney.education}</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Bar Admission</dt>
                <dd className="text-ink-muted">{attorney.barAdmission}</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Practice Areas</dt>
                <dd className="mt-1 flex flex-wrap gap-2">
                  {attorneyPracticeAreas.map((pa) => (
                    <Link
                      key={pa.id}
                      to={`/practice-areas/${pa.slug}`}
                      className="border border-ink/20 px-3 py-1 text-xs text-ink hover:border-accent hover:text-accent"
                    >
                      {pa.name}
                    </Link>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  )
}

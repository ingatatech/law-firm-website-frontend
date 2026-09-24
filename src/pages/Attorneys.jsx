import Layout from '../components/Layout'
import AttorneyCard from '../components/AttorneyCard'
import { attorneys } from '../data/mockData'

export default function Attorneys() {
  return (
    <Layout>
      <section className="border-b border-ink/10 bg-paperLight">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-wide text-brass">Our Team</p>
          <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink md:text-4xl">
            Meet the attorneys behind our work
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((attorney) => (
            <AttorneyCard key={attorney.id} attorney={attorney} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

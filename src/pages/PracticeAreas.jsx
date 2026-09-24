import Layout from '../components/Layout'
import PracticeAreaCard from '../components/PracticeAreaCard'
import { practiceAreas } from '../data/mockData'

export default function PracticeAreas() {
  return (
    <Layout>
      <section className="border-b border-ink/10 bg-paperLight">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-wide text-brass">Practice Areas</p>
          <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink md:text-4xl">
            Legal services across the matters that affect you most
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.id} area={area} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

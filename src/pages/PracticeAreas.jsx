import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import PracticeAreaCard from '../components/PracticeAreaCard'
import { practiceAreas } from '../data/mockData'

export default function PracticeAreas() {
  return (
    <Layout>
      <PageBanner
        image="/images/banners/practice-areas.jpg"
        imageAlt="Attorneys reviewing legal documents together in a consultation"
        eyebrow="Practice Areas"
        title="Legal services across the matters that affect you most"
      />

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

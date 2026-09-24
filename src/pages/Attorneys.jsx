import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import AttorneyCard from '../components/AttorneyCard'
import { attorneys } from '../data/mockData'

export default function Attorneys() {
  return (
    <Layout>
      <PageBanner
        image="/images/banners/our-team.jpg"
        imageAlt="Two attorneys shaking hands over a desk during a client meeting"
        eyebrow="Our Team"
        title="Meet the attorneys behind our work"
      />

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

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import { officeInfo } from '../data/mockData'

export default function Contact() {
  return (
    <Layout>
      <section className="border-b border-ink/10 bg-paperLight">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-wide text-brass">Contact</p>
          <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink md:text-4xl">
            Get in touch
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-lg font-semibold text-ink">{officeInfo.firmName}</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-ink">Address</dt>
                <dd className="text-ink-muted">{officeInfo.address}</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Telephone</dt>
                <dd className="text-ink-muted">{officeInfo.phone}</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Email</dt>
                <dd className="text-ink-muted">{officeInfo.email}</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Office Hours</dt>
                <dd className="text-ink-muted">{officeInfo.officeHours}</dd>
              </div>
            </dl>
            <div className="mt-6 aspect-video border border-ink/15 bg-paper" aria-hidden="true" />
          </div>

          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

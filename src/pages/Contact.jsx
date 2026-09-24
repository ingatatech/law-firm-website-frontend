import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import ContactForm from '../components/ContactForm'
import { officeInfo } from '../data/mockData'

export default function Contact() {
  return (
    <Layout>
      <PageBanner
        image="/images/banners/contact.jpg"
        imageAlt="Attorney speaking with a client during a consultation"
        eyebrow="Contact"
        title="Get in touch"
      />

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

import Layout from '../components/Layout'
import ConsultationForm from '../components/ConsultationForm'

export default function ConsultationRequest() {
  return (
    <Layout>
      <section className="border-b border-ink/10 bg-paperLight">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-wide text-brass">Request a Consultation</p>
          <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink md:text-4xl">
            Tell us about your legal matter
          </h1>
          <p className="mt-3 max-w-prose text-sm text-ink-muted">
            Submitting this form does not guarantee representation or establish a lawyer-client
            relationship. A member of our team will review your request and follow up.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16">
        <ConsultationForm />
      </section>
    </Layout>
  )
}

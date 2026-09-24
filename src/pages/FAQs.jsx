import { useState } from 'react'
import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import { faqs } from '../data/mockData'

export default function FAQs() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)
  const sorted = [...faqs].sort((a, b) => a.orderIndex - b.orderIndex)

  return (
    <Layout>
      <PageBanner
        image="/images/banners/faqs.jpg"
        imageAlt="Magnifying glass over the words 'Frequently Asked Questions'"
        eyebrow="FAQs"
        title="Frequently asked questions"
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {sorted.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div key={faq.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink">{faq.question}</span>
                  <span className="ml-4 shrink-0 text-accent">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <p className="max-w-prose pb-5 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

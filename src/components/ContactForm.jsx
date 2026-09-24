import { useState } from 'react'

const initialState = { fullName: '', email: '', phone: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.subject.trim()) next.subject = 'Please enter a subject.'
    if (!form.message.trim()) next.message = 'Please enter your message.'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // TODO: replace with real API call once backend is ready:
    // await fetch('/api/contact-inquiries', { method: 'POST', ... })

    setSubmitted(true)
    setForm(initialState)
  }

  if (submitted) {
    return (
      <div className="border border-accent/40 bg-accent/5 p-8">
        <h3 className="font-serif text-xl font-semibold text-ink">Message Sent</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Thank you for contacting us. A member of our team will respond as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-ink" htmlFor="fullName">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1.5 w-full border border-ink/20 bg-paperLight px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
          />
          {errors.fullName && <p className="mt-1 text-xs text-accent">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-ink" htmlFor="email">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1.5 w-full border border-ink/20 bg-paperLight px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
          />
          {errors.email && <p className="mt-1 text-xs text-accent">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="subject">
          Subject <span className="text-accent">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="mt-1.5 w-full border border-ink/20 bg-paperLight px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
        />
        {errors.subject && <p className="mt-1 text-xs text-accent">{errors.subject}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="message">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="mt-1.5 w-full border border-ink/20 bg-paperLight px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
        />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-paperLight transition-colors hover:bg-accent-dark"
      >
        Send Message
      </button>
    </form>
  )
}

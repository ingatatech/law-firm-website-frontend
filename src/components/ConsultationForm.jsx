import { useState } from 'react'
import { practiceAreas } from '../data/mockData'

const initialState = {
  fullName: '',
  phone: '',
  email: '',
  organization: '',
  practiceAreaId: '',
  preferredContactMethod: 'Email',
  message: ''
}

export default function ConsultationForm() {
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
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.practiceAreaId) next.practiceAreaId = 'Please select a practice area.'
    if (!form.message.trim()) next.message = 'Please describe your legal matter briefly.'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // TODO: replace with real API call once backend is ready:
    // await fetch('/api/consultation-requests', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // })

    setSubmitted(true)
    setForm(initialState)
  }

  if (submitted) {
    return (
      <div className="border border-accent/40 bg-accent/5 p-8">
        <h3 className="font-serif text-xl font-semibold text-ink">Thank You</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Your consultation request has been received. A member of our team will review your request and
          contact you using the information you provided. Please note that submitting this request does
          not establish a lawyer-client relationship.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} error={errors.fullName} required />
        <Field label="Phone Number" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} required />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} required />
        <Field label="Organization (optional)" name="organization" value={form.organization} onChange={handleChange} />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="practiceAreaId">
          Legal Service / Practice Area <span className="text-accent">*</span>
        </label>
        <select
          id="practiceAreaId"
          name="practiceAreaId"
          value={form.practiceAreaId}
          onChange={handleChange}
          className="mt-1.5 w-full border border-ink/20 bg-paperLight px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
        >
          <option value="">Select a practice area</option>
          {practiceAreas.map((area) => (
            <option key={area.id} value={area.id}>{area.name}</option>
          ))}
        </select>
        {errors.practiceAreaId && <p className="mt-1 text-xs text-accent">{errors.practiceAreaId}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="preferredContactMethod">
          Preferred Contact Method
        </label>
        <select
          id="preferredContactMethod"
          name="preferredContactMethod"
          value={form.preferredContactMethod}
          onChange={handleChange}
          className="mt-1.5 w-full border border-ink/20 bg-paperLight px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
        >
          <option>Email</option>
          <option>Phone</option>
          <option>WhatsApp</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="message">
          General Description of Inquiry <span className="text-accent">*</span>
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
        <p className="mt-1.5 text-xs text-ink-muted">
          Please do not submit confidential or highly sensitive information through this form.
        </p>
      </div>

      <button
        type="submit"
        className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-paperLight transition-colors hover:bg-accent-dark"
      >
        Submit Request
      </button>
    </form>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink" htmlFor={name}>
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1.5 w-full border border-ink/20 bg-paperLight px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
      />
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </div>
  )
}

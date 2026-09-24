import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { officeInfo } from '../data/mockData'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Our Team', to: '/attorneys' },
  { label: 'Insights', to: '/insights' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' }
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-colors ${
      isActive ? 'text-accent' : 'text-ink hover:text-accent'
    }`

  return (
    <header className="border-b border-ink/10 bg-paperLight">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="font-serif text-xl font-semibold text-ink">
          {officeInfo.firmName}
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/consultation"
          className="hidden rounded-none border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-paperLight md:inline-block"
        >
          Request a Consultation
        </NavLink>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-ink/10 px-6 py-5 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/consultation"
            className="mt-2 inline-block border border-accent px-4 py-2 text-center text-sm font-medium text-accent"
            onClick={() => setOpen(false)}
          >
            Request a Consultation
          </NavLink>
        </nav>
      )}
    </header>
  )
}

import { Link } from 'react-router-dom'

export default function PracticeAreaCard({ area }) {
  return (
    <Link
      to={`/practice-areas/${area.slug}`}
      className="group block border border-ink/15 p-6 transition-colors hover:border-accent"
    >
      <h3 className="font-serif text-lg font-semibold text-ink">{area.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{area.description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
        Learn more
        <span className="ml-1 transition-transform group-hover:translate-x-0.5">›</span>
      </span>
    </Link>
  )
}

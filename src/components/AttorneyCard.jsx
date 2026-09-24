import { Link } from 'react-router-dom'

export default function AttorneyCard({ attorney }) {
  const initials = attorney.fullName
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <Link to={`/attorneys/${attorney.id}`} className="group block">
      <div className="flex aspect-[4/5] items-center justify-center border border-ink/15 bg-paper text-3xl font-serif text-ink/40">
        {attorney.photoUrl ? (
          <img src={attorney.photoUrl} alt={attorney.fullName} className="h-full w-full object-cover" />
        ) : (
          initials
        )}
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-ink group-hover:text-accent">
        {attorney.fullName}
      </h3>
      <p className="text-sm text-ink-muted">{attorney.title}</p>
    </Link>
  )
}

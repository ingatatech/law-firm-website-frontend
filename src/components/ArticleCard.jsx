import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  const date = new Date(article.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <Link to={`/insights/${article.slug}`} className="group block border-b border-ink/10 py-8 first:pt-0">
      <p className="text-xs uppercase tracking-wide text-brass">{date}</p>
      <h3 className="mt-2 font-serif text-xl font-semibold text-ink group-hover:text-accent">
        {article.title}
      </h3>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">{article.summary}</p>
      <span className="mt-3 inline-block text-sm font-medium text-accent">Read article ›</span>
    </Link>
  )
}

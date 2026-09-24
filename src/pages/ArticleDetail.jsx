import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { articles, attorneys } from '../data/mockData'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="font-serif text-2xl font-semibold text-ink">Article not found</h1>
          <Link to="/insights" className="mt-4 inline-block text-sm text-accent">‹ Back to Insights</Link>
        </div>
      </Layout>
    )
  }

  const author = attorneys.find((a) => a.id === article.authorId)
  const date = new Date(article.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/insights" className="text-sm text-accent">‹ Insights</Link>

        <p className="mt-6 text-xs uppercase tracking-wide text-brass">{date}</p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-ink md:text-4xl">{article.title}</h1>
        {author && <p className="mt-3 text-sm text-ink-muted">By {author.fullName}</p>}

        <div className="mt-8 max-w-prose text-base leading-relaxed text-ink">
          <p>{article.content}</p>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-6 text-xs text-ink-muted">
          This article is provided for general informational purposes only and does not constitute legal
          advice. For guidance on your specific situation, please{' '}
          <Link to="/consultation" className="text-accent">request a consultation</Link>.
        </div>
      </article>
    </Layout>
  )
}

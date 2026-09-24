import Layout from '../components/Layout'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/mockData'

export default function Articles() {
  const published = articles.filter((a) => a.status === 'published')

  return (
    <Layout>
      <section className="border-b border-ink/10 bg-paperLight">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-wide text-brass">Insights</p>
          <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink md:text-4xl">
            Legal insights and publications
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        {published.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>
    </Layout>
  )
}

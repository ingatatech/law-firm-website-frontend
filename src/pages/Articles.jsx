import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/mockData'

export default function Articles() {
  const published = articles.filter((a) => a.status === 'published')

  return (
    <Layout>
      <PageBanner
        image="/images/banners/insights.jpg"
        imageAlt="Attorney reviewing case files and documents at a desk"
        eyebrow="Insights"
        title="Legal insights and publications"
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        {published.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>
    </Layout>
  )
}

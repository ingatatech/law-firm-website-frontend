import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl font-semibold text-ink">Page not found</h1>
        <p className="mt-3 text-sm text-ink-muted">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block text-sm font-medium text-accent">‹ Back to Home</Link>
      </div>
    </Layout>
  )
}

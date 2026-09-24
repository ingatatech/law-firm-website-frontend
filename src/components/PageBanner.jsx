/**
 * Shared banner for interior section pages (Our Team, Practice Areas,
 * Insights, FAQs, Contact, etc.). Renders a full-width background
 * photograph with a dark overlay for text contrast, and an eyebrow +
 * title (+ optional description) on top.
 *
 * Kept as one component so every section stays visually consistent —
 * change the overlay, spacing, or typography here and it updates
 * everywhere at once.
 */
export default function PageBanner({ image, imageAlt, eyebrow, title, description }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Dark overlay: keeps the photography visible but subtle, while
          guaranteeing strong contrast for the light text on top. */}
      <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 md:py-28">
        <p className="text-sm font-medium uppercase tracking-wide text-brass">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-paperLight md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-paperLight/80">{description}</p>
        )}
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Boost Your Productivity?</h2>
        <a className="inline-block rounded bg-primary text-white px-6 py-3" href={require('@/lib/constants').CHROME_INSTALL_URL}>Install for Chrome</a>
      </div>
    </section>
  )
}



export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-8 place-items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">Stop Retyping. Start Scripting.</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Create, manage, and use powerful prompt templates on your favorite AI chat platforms.
        </p>
        <div className="flex items-center gap-4">
          <a className="inline-block rounded bg-primary text-white px-6 py-3" href={require('@/lib/constants').CHROME_INSTALL_URL}>Install for Chrome</a>
        </div>
      </div>
    </section>
  )
}



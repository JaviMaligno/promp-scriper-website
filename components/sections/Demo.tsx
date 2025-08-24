export function Demo() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">See It in Action</h2>
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Prompt Scripter Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}



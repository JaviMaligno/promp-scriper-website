import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prompt Scripter</title>
        <meta name="description" content="Create, manage, and use powerful prompt templates on your favorite AI chat platforms." />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Prompt Scripter</h1>
          <p className="text-gray-600 mb-6">Next.js + Tailwind starter running in Docker</p>
          <a className="inline-block rounded bg-primary text-white px-6 py-3" href="#">Install for Chrome</a>
        </div>
      </main>
    </>
  )
}



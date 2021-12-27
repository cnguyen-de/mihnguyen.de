import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mi Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 class="text-3xl tracking-wider">Hi, I'm Mi Huyen Nguyen 👋🏻</h1>
        <h2 class="pt-4 italic font-light text-gray-500">🚧 The website is currently under construction 🚧</h2>
      </main>
    </div>
  )
}

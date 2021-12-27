import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-green-100 to-blue-200">
      <Head>
        <title>Mi Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <Image className="object-cover rounded-full" src={`/avatar.jpeg`} width={350} height={350}></Image>

        <h1 className="mt-4 text-3xl tracking-wider">Hi, I'm Mi Huyen Nguyen 👋🏻</h1>
        <h2 className="pt-4 italic font-light text-gray-500">🚧 The website is currently under construction 🚧</h2>
      </main>
    </div>
  )
}

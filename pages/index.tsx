import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guerrilha Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex flex-col items-center justify-center bg-[#151414]">
        <main className="flex w-full flex-col items-center justify-center px-20 text-center">
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
          <h1 className="font-bold text-3xl">lorem ipsum</h1>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Home

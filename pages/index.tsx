import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guerrilha Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center bg-[#151414]">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <Header />
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
          <h1 className="text-6xl font-bold">
            test
          </h1>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home

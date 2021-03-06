import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import CardSection from '../components/CardSection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guerrilha Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#0e0d0d]">
        <Header />
        <HomeSection />
        <CardSection />
        <Footer />
      </div>
    </>
  )
}

export default Home

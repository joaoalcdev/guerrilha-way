import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'

import Data from '../data/data.json';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guerrilha Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[rgba(21,20,20,0.87)]">
        <Header />
        <HomeSection />
        <div className=" flex flex-col items-center justify-center bg-[#805e5e]">
          <main className="flex w-full flex-col items-center justify-center md:px-32 px-10">
            <section className="flex w-full flex-col items-center justify-center text-center py-14">
              <div className="flex w-full flex-col items-start text-start justify-start text-white">
                <div className="flex flex-row items-center space-x-2 pb-2">
                  <h1 className="flex font-bold items-center text-lg">
                    <p className="flex border-2 border-white rounded-full p-1 mr-2">40.</p> GW Abril – 2022
                  </h1>
                </div>
                <div className="w-full flex flex-row space-x-5">
                  <div className="flex flex-row">
                    <a href="#!"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src="/assets/thumbnail-card.jpg"
                        width={400}
                        height={500}
                        className="px-0 mx-0" />
                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a href="#!"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src="/assets/thumbnail-card.jpg"
                        width={400}
                        height={500}
                        className="px-0 mx-0" />
                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a href="#!"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src="/assets/thumbnail-card.jpg"
                        width={400}
                        height={500}
                        className="px-0 mx-0" />
                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a href="#!"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src="/assets/thumbnail-card.jpg"
                        width={400}
                        height={500}
                        className="px-0 mx-0" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center w-full">
                  <div className="flex flex-col md:flex-row md:space-x-28 space-y-12 md:space-y-0">
                    <div className="flex flex-row w-1/2 md:w-2/3">
                    </div>
                    <div className="flex flex-col space-y-4 w-1/2 md:w-full font-light">
                      <p className="flex flex-row font-light text-md text-left md:text-left h-auto">
                        {/* <Image
                          src="/assets/thumbnail-card.jpg"
                          width={400}
                          height={500}
                          className="px-0 mx-0" />
                        <Image
                          src="/assets/thumbnail-card.jpg"
                          width={400}
                          height={500}
                          className="px-0 mx-0" />
                        <Image
                          src="/assets/thumbnail-card.jpg"
                          width={400}
                          height={500}
                          className="px-0 mx-0" /> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* <div className="flex-row text-justify justify-center items-center text-white">
            {
              Data.map((post) => (
                <div className="text-left border border-white m-2" key={post.id}>
                  <p>{post.title}</p>
                  <p>{post.description}</p>
                </div>
              ))
            }
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home

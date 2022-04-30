import Image from 'next/image'
export default function CardSection() {
  return (
    <>
      <div className="font-RubikSerif flex flex-col items-center justify-center bg-[#171717f8]">
        <main className="flex w-full flex-col items-center justify-center sm:px-20 md:px-32 px-10">
          <section className="flex w-full justify-center text-left lg:text-left text-white text-sm">
            {/* 1st line cards */}
            <div className="py-10 text-center md:text-left">
              <div className="flex flex-row items-center space-x-2 pb-6">
                <h1 className="flex font-bold items-center text-sm">
                  <p className="flex border-2 border-white rounded-full h-8 w-8 text-center items-center justify-center mr-1">40</p>GW Abril – 2022
                </h1>
              </div>
              <div className="space-y-2 md:space-y-0 grid grid-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
                <div className="">
                  <p className="">
                    <div className="flex flex-row drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                      <a href="https://app.guerrilhaway.com.br/aula/992"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card01.jpg"
                          width={380}
                          height={530}
                          className="px-0 mx-0 rounded-sm" />
                      </a>
                    </div>
                  </p>
                </div>
                <div className="">
                  <p className="">
                    <div className="flex flex-row drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                      <a href="https://app.guerrilhaway.com.br/aula/992"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card02.jpg"
                          width={380}
                          height={530}
                          className="px-0 mx-0 rounded-sm" />
                      </a>
                    </div>
                  </p>
                </div>
                <div className="">
                  <p className="">
                    <div className="flex flex-row drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                      <a href="https://app.guerrilhaway.com.br/aula/991"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card03.jpg"
                          width={380}
                          height={530}
                          className="px-0 mx-0 rounded-sm" />
                      </a>
                    </div>
                  </p>
                </div>
                <div className="">
                  <p className="">
                    <div className="flex flex-row drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                      <a href="https://app.guerrilhaway.com.br/aula/978"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card04.jpg"
                          width={380}
                          height={530}
                          className="px-0 mx-0 rounded-sm" />
                      </a>
                    </div>
                  </p>
                </div>
              </div>
              {/* 2nd line cards */}
              <div className="flex flex-row items-center space-x-2 pb-6">
                <h1 className="mt-12 flex font-bold items-center text-sm">
                  <p className="flex border-2 border-white rounded-full h-8 w-8 text-center items-center justify-center mr-1">39</p>GW Abril – 2022
                </h1>
              </div>
              <div className="space-y-2 md:space-y-0 grid grid-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
                <div className="">
                  <p className="">
                    <div className="flex flex-row drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                      <a href="https://app.guerrilhaway.com.br/aula/977"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card05.jpg"
                          width={380}
                          height={530}
                          className="px-0 mx-0 rounded-sm" />
                      </a>
                    </div>
                  </p>
                </div>
                <div className="">
                  <p className="">
                    <div className="flex flex-row drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                      <a href="https://app.guerrilhaway.com.br/aula/976"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card06.jpg"
                          width={380}
                          height={530}
                          className="px-0 mx-0 rounded-sm" />
                      </a>
                    </div>
                  </p>
                </div>
                <div className="">
                  <p className="">
                    <div className="flex flex-row drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                      <a href="https://app.guerrilhaway.com.br/aula/975"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card07.jpg"
                          width={380}
                          height={530}
                          className="px-0 mx-0 rounded-sm" />
                      </a>
                    </div>
                  </p>
                </div>
                <div className="">
                  <p className="">
                    <div className="flex flex-row drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                      <a href="https://app.guerrilhaway.com.br/aula/973"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card08.jpg"
                          width={380}
                          height={530}
                          className="px-0 mx-0 rounded-sm" />
                      </a>
                    </div>
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="my-8">
                  <div className="w-full flex flex-row">
                    <a href="https://app.guerrilhaway.com.br/aula/972"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src="/assets/thumbnail-section.jpeg"
                        width={1200}
                        height={200}
                        className="w-full px-0 mx-0 rounded-sm" />
                    </a>
                  </div>
                </p>
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
    </>
  )
}
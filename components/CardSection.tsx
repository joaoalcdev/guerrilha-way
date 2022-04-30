import Image from 'next/image'
import Data from '../data/data.json'
export default function CardSection() {
  return (
    <>
      <div className="font-RubikSerif flex flex-col items-center justify-center bg-[#171717f8]">
        <main className="flex w-full flex-col items-center justify-center sm:px-20 md:px-32 px-10">
          <section className="flex w-full space-y-8 justify-center text-left lg:text-left text-white text-sm">
            {/* line 01 */}
            <div className="py-0 text-center md:text-left">
              <div className="flex flex-row items-center space-x-2 pb-2 pt-12">
                <h1 className="flex font-bold items-center text-sm">
                  <p className="flex border-2 border-white rounded-full h-8 w-8 text-center items-center justify-center mr-1">40</p>GW Abril – 2022
                </h1>
              </div>
              <div className="space-y-2 md:space-y-0 grid grid-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
                {/* card 01 */}
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="">
                    <div className="w-full flex flex-row">
                      <a href="https://app.guerrilhaway.com.br/aula/972"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card01.jpg"
                          width={480}
                          height={650}
                          className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                      </a>
                    </div>
                  </p>
                </div>
                {/* card 02 */}
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="">
                    <div className="w-full flex flex-row">
                      <a href="https://app.guerrilhaway.com.br/aula/972"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card02.jpg"
                          width={480}
                          height={650}
                          className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                      </a>
                    </div>
                  </p>
                </div>
                {/* card 03 */}
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="">
                    <div className="w-full flex flex-row">
                      <a href="https://app.guerrilhaway.com.br/aula/972"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card03.jpg"
                          width={480}
                          height={650}
                          className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                      </a>
                    </div>
                  </p>
                </div>
                {/* card 04 */}
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="">
                    <div className="w-full flex flex-row">
                      <a href="https://app.guerrilhaway.com.br/aula/972"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card04.jpg"
                          width={480}
                          height={650}
                          className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                      </a>
                    </div>
                  </p>
                </div>
              </div>
              {/* line 02 */}
              <div className="flex flex-row items-center space-x-2 pb-2 pt-12">
                <h1 className="flex font-bold items-center text-sm">
                  <p className="flex border-2 border-white rounded-full h-8 w-8 text-center items-center justify-center mr-1">39</p>GW Março – 2022
                </h1>
              </div>
              <div className="space-y-2 md:space-y-0 grid grid-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
                {/* card 05 */}
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="">
                    <div className="w-full flex flex-row">
                      <a href="https://app.guerrilhaway.com.br/aula/972"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card05.jpg"
                          width={480}
                          height={650}
                          className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                      </a>
                    </div>
                  </p>
                </div>
                {/* card 06 */}
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="">
                    <div className="w-full flex flex-row">
                      <a href="https://app.guerrilhaway.com.br/aula/972"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card06.jpg"
                          width={480}
                          height={650}
                          className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                      </a>
                    </div>
                  </p>
                </div>
                {/* card 07 */}
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="">
                    <div className="w-full flex flex-row">
                      <a href="https://app.guerrilhaway.com.br/aula/972"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card07.jpg"
                          width={480}
                          height={650}
                          className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                      </a>
                    </div>
                  </p>
                </div>
                {/* card 08 */}
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="">
                    <div className="w-full flex flex-row">
                      <a href="https://app.guerrilhaway.com.br/aula/972"
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src="/assets/thumbnail-card08.jpg"
                          width={480}
                          height={650}
                          className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                      </a>
                    </div>
                  </p>
                </div>
              </div>
              {/* separador */}
              <div className="py-12 w-full block flex-col justify-center items-center">
                <p className="">
                  <div className="w-full flex flex-col">
                    <a href="https://app.guerrilhaway.com.br/aula/972"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src="/assets/thumbnail-section.jpeg"
                        width={1200}
                        height={200}
                        className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
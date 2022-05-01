import Image from 'next/image'
import Data from '../data/data.json'
export default function HomeSection() {

  return (
    <>
      {Data.slice(0, 1).map((card, index) => (
        <div className="font-RubikSerif min-h-screen flex flex-col items-center justify-center bg-[#131212]">
          <main className="flex w-full flex-col items-center justify-center px-8 sm:px-20 lg:px-32">
            <section className="flex w-full flex-col items-center justify-center text-center py-14">
              <div key={index} className="flex flex-col items-center justify-center text-center text-white space-y-12">
                <h1 className="font-bold text-3xl uppercase">esta semana</h1>
                <p className="font-light text-md">
                  GW Semana #{card.id} - {card.date}: {card.title}
                </p>
                <div className="flex flex-row items-center justify-center w-full">
                  <div className="flex flex-col lg:flex-row lg:space-x-20 space-y-12 lg:space-y-0">
                    <div className="flex flex-col w-full md:w-full lg:w-2/3">
                      <a href={card.link}
                        target="_blank"
                        rel="noreferrer noopener">
                        <Image
                          src={card.thumbnail}
                          width={470}
                          height={650}
                          className="px-0 mx-0" />
                      </a>
                    </div>
                    <div className="flex flex-col justify-start space-y-4 px-3 sm:px-2 md:x-14 lg:px-0 w-full md:w-full lg:w-2/3 font-light ">
                      {/* <div className="w-full space-y-4"> */}
                      <p className="flex flex-row font-light text-md text-left lg:text-left h-auto">
                        {card.description}
                      </p>
                      <p className="flex flex-row font-light text-md text-justify flex-wrap lg:text-left h-auto">
                        Rola pra baixo pra conferir também:
                      </p>
                      <p className="flex flex-row font-light text-md text-justify flex-wrap lg:text-left h-auto">
                        <span className="font-bold">Pendure Isto:</span> um exercício fundamental para a sua semana!
                      </p>
                      <p className="flex flex-row font-light text-md text-justify flex-wrap lg:text-left h-auto">
                        <span className="font-bold pr-1">
                          Canal do Telegram só para GW’s:</span>seu canal é <a href="http://t.me/joinchat/AAAAAFirWTdR1Px3WQn-TQ"
                            target="_blank"
                            rel="noreferrer noopener">
                          <span className="flex flex-row pl-1 font-bold text-[#ee2058]"> aqui </span></a>!
                      </p>
                      {/* </div> */}
                      <p className="flex flex-row font-light text-md text-left lg:text-left h-auto">
                        <a href="https://app.guerrilhaway.com.br/aula/993"
                          target="_blank"
                          className="
                            transition ease-in-out duration-300	 
                            px-12 py-2
                            text-sm lg:text-center lg:text-lg font-bold uppercase 
                            border rounded-lg border-[#ee2058] 
                            bg-transparent hover:bg-[#ee2058]
                            text-[#ee2058] hover:text-white
                          "
                          rel="noreferrer noopener">
                          Ver conteúdo </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      ))}
    </>
  )
}
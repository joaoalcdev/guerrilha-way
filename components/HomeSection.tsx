import Image from 'next/image'
export default function HomeSection() {
  return (
    <>
      <div className="font-RubikSerif min-h-screen flex flex-col items-center justify-center bg-[#131212]">
        <main className="flex w-full flex-col items-center justify-center px-8 sm:px-20 md:px-32">
          <section className="flex w-full flex-col items-center justify-center text-center py-14">
            <div className="flex flex-col items-center justify-center text-center text-white space-y-12">
              <h1 className="font-bold text-3xl uppercase">esta semana</h1>
              <p className="font-light text-md">
                GW Semana #157 – 25/04/2022: Com o olhar CORRETO, os incômodos se tornam GRAÇA
              </p>
              <div className="flex flex-row items-center justify-center w-full">
                <div className="flex flex-col md:flex-row md:space-x-28 space-y-12 md:space-y-0">
                  <div className="flex flex-col w-full md:w-2/3">
                    <a href="https://app.guerrilhaway.com.br/aula/993"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src="/assets/thumbnail-card.jpg"
                        width={470}
                        height={650}
                        className="px-0 mx-0" />
                    </a>
                  </div>
                  <div className="flex flex-col space-y-4 w-full md:w-2/3 font-light">
                    <p className="flex flex-row font-light text-md text-left md:text-left h-auto">
                      Quem nunca teve um mau dia? O filtro de água estraga, a torneira também, a porta do banheiro empena e a maçaneta da porta do quarto desmonta. Nesse mesmo dia, você leva uma bronca de seu chefe e sua namorada pede um tempo. Quem ficaria de bom humor? Bom, se você tiver um olhar profundo, um olhar capaz de perceber a graça e o bom humor por baixo de cada situação ruim da vida, nada é capaz de abalar você por muito tempo. Não se engane, isso é uma força tremenda. O Caderno de Ativação #157 do Guerrilha Way está aqui para ajudá-lo a adquiri-la.
                    </p>
                    <p className="flex flex-row font-light text-md text-left md:text-left h-auto">
                      Rola pra baixo pra conferir também:
                    </p>
                    <p className="flex flex-row font-light text-md text-left md:text-left h-auto">
                      <span className="font-bold">Pendure Isto:</span> um exercício fundamental para a sua semana!
                    </p>
                    <p className="flex flex-row font-light text-md text-left md:text-left h-auto">
                      <span className="font-bold pr-1">
                        Canal do Telegram só para GW’s:</span>seu canal é <a href="http://t.me/joinchat/AAAAAFirWTdR1Px3WQn-TQ"
                          target="_blank"
                          rel="noreferrer noopener">
                        <span className="flex flex-row pl-1 font-bold text-[#ee2058]"> aqui </span></a>!
                    </p>
                    <p className="flex flex-row font-light text-md text-left md:text-left h-auto">
                      <a href="https://app.guerrilhaway.com.br/aula/993"
                        target="_blank"
                        className="
                            transition ease-in-out duration-300	 
                            px-12 py-2
                            text-sm md:text-center md:text-lg font-bold uppercase 
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
    </>
  )
}
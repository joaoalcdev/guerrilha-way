import Image from 'next/image'
import FacebookIcon from './icons/Facebook'
import YoutubeIcon from './icons/Youtube'
import InstagramIcon from './icons/Instagram'

export default function Footer() {
  return (
    <footer className="flex w-full pt-4 text-left lg:text-left bg-[#131212] text-white text-sm">
      <div className="mx-8 md:mx-32 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="
              uppercase
              font-semibold
              mb-4
              flex
              items-center
              justify-center
              md:justify-start
            ">
              <a href="#" rel="noreferrer noopener" className="text-white text-sm">
                <Image src="/assets/gw-logo.webp" width={158} height={38} />
              </a>
            </h6>
            <div className="flex flex-row space-x-4 pb-8 items-center justify-center md:justify-start md:pl-5">
              <a href="https://www.instagram.com/guerrilhaway/" target="_blank" rel="noreferrer noopener" className="text-white text-sm">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/marsili.italo" target="_blank" rel="noreferrer noopener" className="text-white text-sm">
                <FacebookIcon />
              </a>
              <a href="https://www.youtube.com/user/italomarsili" target="_blank" rel="noreferrer noopener" className="text-white text-sm">
                <YoutubeIcon />
              </a>
            </div>
          </div>
          <div className="">
            <p className="mb-4">
              <a href="https://app.guerrilhaway.com.br/termos-de-uso" target="_blank" rel="noreferrer noopener" className="text-white text-sm">Termos de uso</a>
            </p>
            <p className="mb-4">
              <a href="https://app.guerrilhaway.com.br/politica-de-privacidade" target="_blank" rel="noreferrer noopener" className="text-white text-sm">Privacidade</a>
            </p>
          </div>
          <div className="">
            <p className="mb-4">
              <a href="#" target="_blank" rel="noreferrer noopener" className="text-white text-sm">Ajuda</a>
            </p>
            <p className="mb-4">
              <a href="#" target="_blank" rel="noreferrer noopener" className="text-white text-sm">Entre em contato</a>
            </p>
          </div>
          <div className="w-full flex-col">
            <h6 className="mx-16 md:mx-0 font-light text-sm mb-4 flex justify-center md:justify-start md:text-left">
              Baixe o aplicativo gratuitamente e acesse o conteúdo no seu celular
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4 gap-2">
              <a href="https://apps.apple.com/br/app/guerrilha-way/id1542027387" className="text-white text-sm">
                <Image src="/assets/apple.webp" width={180} height={50} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.wrl.guerrilha_way" className="text-white text-sm">
                <Image src="/assets/google.webp" width={180} height={50} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
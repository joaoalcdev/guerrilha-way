import Image from 'next/image'
import FacebookIcon from './icons/Facebook'
import YoutubeIcon from './icons/Youtube'
import InstagramIcon from './icons/Instagram'

export default function Footer() {
  return (
    <footer className="flex w-full pt-4 text-center lg:text-left bg-[#131212] text-white text-sm">
      <div className="mx-32 py-10 text-center md:text-left">
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
              <a href="#!" className="text-white text-sm">
                <Image src="/assets/gw-logo.png" width={158} height={38} />
              </a>
            </h6>
            <div className="flex flex-row space-x-4 pb-8 items-center justify-center md:justify-start md:pl-5">
              <a href="#!" className="text-white text-sm">
                <InstagramIcon />
              </a>
              <a href="#!" className="text-white text-sm">
                <FacebookIcon />
              </a>
              <a href="#!" className="text-white text-sm">
                <YoutubeIcon />
              </a>
            </div>
          </div>
          <div className="">
            <p className="mb-4">
              <a href="#!" className="text-white text-sm">Termos de uso</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-white text-sm">Privacidade</a>
            </p>
          </div>
          <div className="">
            <p className="mb-4">
              <a href="#!" className="text-white text-sm">Ajuda</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-white text-sm">Entre em contato</a>
            </p>
          </div>
          <div className="">
            <h6 className="font-regular text-sm mb-4 flex justify-center md:justify-start md:text-left">
              Baixe o aplicativo gratuitamente e acesse o conteúdo no seu celular
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4 gap-2">
              <Image src="/assets/apple.png" width={180} height={50} />
              <Image src="/assets/google.png" width={180} height={50} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
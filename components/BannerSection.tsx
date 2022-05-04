import Image from 'next/image'
export default function BannerSection() {
  return (
    <div className="py-12 w-full block flex-col justify-center items-center">
      <div className="w-full flex flex-col">
        <a href="https://app.guerrilhaway.com.br/aula/972"
          target="_blank"
          rel="noreferrer noopener">
          <Image
            src="/assets/cards/thumbnail-section.webp"
            width={1200}
            height={200}
            className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
        </a>
      </div>
    </div>
  )
}
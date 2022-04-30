import Image from 'next/image'
import Data from '../data/data.json'
export default function CardList() {
  return (
    <>
      {Data.slice(4, 8).map((card, index) => (
        <div
          key={index}
          className="">
          <div className="flex flex-row items-center px-0 sm:px-0 pb-0 pt-2">
            {/* <h1 className="px-0 w-full flex font-bold items-center text-sm">
              <p className="w-9 flex text-xs border-0 rounded-full h-9 text-center items-center justify-center mr-1 px-2">#{card.id}</p> {card.date}
            </h1> */}
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="">
              <div className="w-full flex flex-row">
                <a href={card.link}
                  target="_blank"
                  rel="noreferrer noopener">
                  <Image
                    src={card.thumbnail}
                    width={480}
                    height={650}
                    className="w-full px-0 mx-0 rounded-sm drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" />
                </a>
              </div>
            </p>
          </div>
        </div>
      ))}
    </>
  )
}
import Data from '../data/data.json'
import CardList01 from './CardList01'
import CardList02 from './CardList02'
import BannerSection from './BannerSection'
export default function CardSection() {
  return (
    <>
      <div className="font-RubikSerif flex flex-col items-center justify-center bg-[#171717f8]">
        <main className="flex w-full flex-col items-center justify-center sm:px-20 md:px-32 px-10">
          <section className="flex w-full space-y-8 justify-center text-left lg:text-left text-white text-sm">
            {/* line cards 01 */}
            <div className="py-0 text-left md:text-left">
              {Data.slice(3, 4).map((data, index) => (
                <>
                  <div key={index} className="flex flex-row items-center space-x-2 pb-2 pt-12">
                    <h1 className="flex font-bold items-center text-sm">
                      <p className="flex border-2 border-white rounded-full h-8 w-8 text-center items-center justify-center mr-1">{data.week}</p>GW {data.month} – {data.year}
                    </h1>
                  </div>
                  <div className="space-y-2 md:space-y-0 grid grid-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
                    <CardList01 />
                  </div>
                </>
              ))}
              {/* line cards 02 */}
              {Data.slice(7, 8).map((data, index) => (
                <>
                  <div key={index} className="flex flex-row items-center space-x-2 pb-2 pt-12">
                    <h1 className="flex font-bold items-center text-sm">
                      <p className="flex border-2 border-white rounded-full h-8 w-8 text-center items-center justify-center mr-1">{data.week}</p>GW {data.month} – {data.year}
                    </h1>
                  </div>
                  <div className="space-y-2 md:space-y-0 grid grid-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
                    <CardList02 />
                  </div>
                </>
              ))}
              {/* full width banner */}
              <BannerSection />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
import Image from 'next/image';
import Search from './Search';

export default function Header() {
  return (
    <>
      <nav className="bg-[#131212] border-gray-200 px-2 sm:px-4 py-8 mb-1">
        <div className="container flex flex-wrap justify-between items-center px-8 md:px-32">
          <a href="#" className="flex items-center">
            <Image src="/assets/gw-logo.png" width={158} height={38} className="mr-3 h-6 sm:h-9" alt="Guerrilha Way" />
          </a>
          <div className="flex w-1/2 items-center justify-end">
            <div className="flex mr-3">
              <Search />
            </div>
            {/* user profile */}
            <button type="button" className="flex text-sm rounded-full space-x-2 md:mr-0">
              <button
                type="button"
                className="
                    duration-[0.2s]
                    bg-[#16161B]
                    text-sm
                    rounded-full
                    focus:ring-2
                    focus:ring-offset-2
                    hover:bg-color-[#343434]
                    focus:border-[#ee2058]
                    focus:ring-offset-[#16161B]
                    focus:ring-[#ee2058]
                  "
              >
                <div className="h-8 w-8 rounded-full z-[1]">
                  <Image src="/assets/avatar.png" width={64} height={64} className="rounded-full" alt="Avatar" />
                </div>
              </button>
              <button
                type="button"
                className="
                    duration-[0.2s]
                    bg-[#16161B]
                    text-sm
                    rounded-full
                    focus:ring-2
                    focus:ring-offset-2
                    hover:bg-color-[#343434]
                    focus:border-[#ee2058]
                    focus:ring-offset-[#16161B]
                    focus:ring-[#ee2058]
                  "
              >
                <div className="h-8 w-8 rounded-full z-[1]">
                  <Image src="/assets/avatar.png" width={64} height={64} className="rounded-full" alt="Avatar" />
                </div>
              </button>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
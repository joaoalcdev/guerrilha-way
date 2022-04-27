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
          <div className="flex w-1/2 items-center justify-end space-x-4">
            <div className="flex mr-3">
              <Search />
              {/* <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button> */}
            </div>
            {/* user profile */}
            <button type="button" className="flex text-sm rounded-full md:mr-0">
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
                    focus:border-b-2
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
            {/* notification */}
            <button type="button" className="flex text-sm rounded-full md:mr-0">
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
                    focus:border-b-2
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
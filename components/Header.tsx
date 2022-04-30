import Image from 'next/image';
import Search from './Search';
import NotifyIcon from '../components/icons/Notify';

export default function Header() {
  return (
    <>
      <nav className="bg-[#131212] border-gray-200 px-2 sm:px-4 py-8 mb-1 items-center justify-center flex">
        <div className="container flex md:flex-wrap justify-start sm:justify-between md:justify-between items-center px-6 sm:px-0 md:px-0">
          <div className="py-5 md:py-0 flex flex-col md:flex-row w-full md:w-full items-center justify-center sm:justify-center space-x-0">
            <div className="flex md:py-0 flex-row w-full justify-start items-center">
              <div className="w-1/2 absolute md:relative md:w-full justify-start flex items-center text-sm rounded-full md:mr-0">
                <a href="#" className="z-10">
                  <Image src="/assets/gw-logo.png" width={158} height={38} className="" alt="Guerrilha Way" />
                </a>
              </div>
            </div>
            <div className="md:order-2 flex flex-row w-full justify-center items-center">
              <div className="w-full pr-8 absolute md:px-0 md:relative justify-end md:justify-end space-x-3 flex items-center text-sm rounded-full md:mr-0">
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
                  <div className="flex text-[#404040] h-8 w-8 items-center justify-center rounded-full z-[1]">
                    <NotifyIcon />
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
              </div>
            </div>
            <div className="flex mt-10 md:mt-0 relative flex-col md:flex-row w-full justify-center items-center">
              <div className="w-full justify-center block md:block items-center text-sm rounded-full md:mr-0">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
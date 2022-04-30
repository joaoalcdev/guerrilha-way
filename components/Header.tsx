import Image from 'next/image';
import Search from './Search';
import NotifyIcon from '../components/icons/Notify';

export default function Header() {
  return (
    <>
      <nav className="bg-[#131212] border-gray-200 px-2 sm:px-4 py-8 mb-1 items-center justify-center flex">
        <div className="container flex md:flex-wrap justify-start sm:justify-between md:justify-between items-center px-2 sm:px-0 md:px-0">
          {/* <div className="flex flex-row items-center justify-start">
            <a href="#" className="flex w-full sm:w-full justify-start items-center px-0 md:px-0 pb-4 sm:pb-0">
              <Image src="/assets/gw-logo.png" width={158} height={38} className="" alt="Guerrilha Way" />
            </a>
          </div> */}
          <div className="flex sm:flex-row w-full md:w-full items-center justify-center sm:justify-center space-x-0">
            <div className="flex flex-row w-full justify-start items-center">
              <div className="w-2/3 sm:w-full justify-start flex items-center text-sm rounded-full md:mr-0">
                {/* <a href="#" className="block sm:flex w-2/3 sm:w-auto justify-start items-center px-0 md:px-0 pb-4 sm:pb-0"> */}
                <Image src="/assets/gw-logo.png" width={158} height={38} className="" alt="Guerrilha Way" />
                {/* </a> */}
              </div>
            </div>
            <div className="sm:order-none flex flex-row w-full justify-center items-center">
              <div className="w-full justify-center block items-center text-sm rounded-full md:mr-0">
                <Search />
              </div>
            </div>
            <div className="flex flex-row w-full justify-center items-center">
              <div className="w-full justify-end space-x-3 flex items-center text-sm rounded-full md:mr-0">
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


            {/* user profile */}
            {/* <div className="w-full justify-end flex items-center text-sm rounded-full space-x-3 md:mr-0">
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
            </div> */}
          </div>
        </div>
      </nav>
    </>
  )
}
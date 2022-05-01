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
              <div className="w-full pr-8 absolute md:px-0 md:relative justify-end md:justify-end space-x-0 flex items-center text-sm rounded-full md:mr-0">
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
                    z-50
                    duration-[0.2s]
                    text-sm
                  "
                >
                  <div className="relative inline-block text-left dropdown">
                    <span className="rounded-md shadow-sm">
                      <button className="inline-flex justify-center w-full pl-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-transparent border-0 border-gray-300 rounded-md hover:text-gray-500 items-start"
                        type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                        <div className="ring-1
                        ring-offset-2
                        hover:bg-color-[#343434]
                        border-[#ee2058]
                        ring-offset-[#16161B]
                        ring-[#ee2058] h-10 w-10 p-0 rounded-full z-[1] bg-[#16161B]">
                          <Image src="/assets/avatar.jpeg" width={64} height={64} className="rounded-full" alt="Avatar" />
                        </div>
                        <svg className="w-5 h-5 ml-1 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                    </span>
                    <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                      <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                        <div className="px-4 py-3">
                          <p className="text-sm leading-5">Logado como</p>
                          <p className="text-sm font-medium leading-5 text-gray-900 truncate">ygorgondim@gmail.com</p>
                        </div>
                        <div className="py-1">
                          <a href="#!" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Configurações da conta</a>
                          <a href="#!" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Suporte</a>
                          <span role="menuitem" className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50" aria-disabled="true">Certificados (em breve)</span>
                          <a href="#!" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Lorem ipsum</a></div>
                        <div className="py-1">
                          <a href="#!" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Sair</a></div>
                      </div>
                    </div>
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
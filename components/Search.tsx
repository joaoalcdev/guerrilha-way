import Data from '../data/data.json';
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState("");
  const [hidden, setHidden] = useState(false);

  const selectAllText = (event: any) => {
    event.target.select();
  };
  const onChange = (event: any) => {
    setQuery(event.target.value);
  }
  const onSubmit = (event: any) => {
    setHidden(true);
    // event.preventDefault(event.target.value);
  }

  return (
    <>
      <div className="block visible relative md:mr-0">
        <form className="w-full md:w-full"
          onFocus={(e) => {
            if (e.currentTarget === e.target) {
              setHidden(false);
              console.log('focos dele');
            } else {
              setHidden(false);
              e.preventDefault();
              console.log('focus no elemento filho', e.target);
            }
            if (!e.currentTarget.contains(e.relatedTarget)) {
              // Não acionado ao trocar o foco entre os elementos filhos
              setHidden(false);
              console.log('foco entrou no proprio elemento');
            }
          }}
          onBlur={(e) => {
            if (e.currentTarget === e.target) {
              console.log('desfoque dele');
            } else {
              console.log('desfoque no elemento filho', e.target);
            }
            if (!e.currentTarget.contains(e.relatedTarget)) {
              // Não acionado ao trocar o foco entre os elementos filhos
              setHidden(true);
              console.log('focos a esquerda');
            }
          }}
        >
          <button className="z-14 flex flex-col w-full" type="submit">
            <div className="flex justify-center absolute top-0 pt-[10px] md:pt-[9px] left-0 items-center px-3 pointer-events-none">
              <svg className="flex justify-center items-center w-full h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </button>
          <input
            type="text"
            // name="search-bar"
            autoComplete="off"
            className="
              duration-200
              flex
              p-2 pl-8 sm:pt-auto sm:pl-10 w-full rounded-lg items-center
              text-white placeholder-gray-400 sm:text-sm
              bg-[#131212]
              focus:select-all
              focus:outline outline-2 outline-offset-0 outline-[#ee2057c7]
              border-gray-600 border focus:border focus:border-[#ee2058]
            "
            placeholder="Buscar por..."
            onFocus={event => setQuery(event.target.value)}
            onChange={onChange}
            onClick={selectAllText}
            onBlur={event => setQuery(event.target.value) === setQuery(event.target.value) ? setHidden(false) : setHidden(false)}
            tabIndex={1}

          />
          <div className="" id="search-bar" hidden={hidden}>
            <ul className="z-50 pt-1 px-1 absolute w-full space-y-0 rounded-lg overflow-y-auto md:overflow-y-auto h-60">
              {
                Data.filter(post => {
                  if (query === '') {
                    return false;
                  } else if (post.title.toLowerCase().includes(query.toLowerCase()) || post.description.toLowerCase().includes(query.toLowerCase()) || (post.id && post.id.toLowerCase().includes(query.toLowerCase())) || (post.date && post.date.toLowerCase().includes(query.toLowerCase())) || (post.link && post.link.toLowerCase().includes(query.toLowerCase()))) {
                    return true;
                  }
                }).map((post, index) => (
                  <div key={index}
                    className="rounded-sm">
                    <div className="bg-[#1f1f20] hover:bg-[#101010] duration-300 hover:drop-shadow-[0px_0px_3px_#2f2f2f90] rounded-0 space-y-0">
                      <div className="flex-row flex">
                        <div className="flex py-3 px-4 flex-col justify-center items-center text-left">
                          <a
                            href={post.link}
                            className="z-50 flex space-x-3 justify-center items-start"
                            target="_blank"
                            rel="noreferrer noopener"
                            onClick={onSubmit}
                          >
                            <img className="rounded-md h-18 w-12 sm:w-12 md:w-24 lg:w-16" src={post.thumbnail} />
                            <div className="text-gray-400 space-y-0 space-x-0 text-xs pb-0">
                              <p className="normal-case flex font-extrabold flex-nowrap w-full text-white text-xs">{post.title}</p>
                              <p className="normal-case overflow-hidden font-extralight	h-8 max-w-12 text-gray-100 text-xs">{post.description}</p>
                              <p className="flex sm:flex md:hidden lg:flex normal-case font-thin text-gray-500 text-xs">CA | Semana #{post.id}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-0 mb-0 border-[0.1px] border-gray-600"></div>
                  </div>
                ))
              }
            </ul>
          </div>
        </form>
      </div>
    </>
  )
}

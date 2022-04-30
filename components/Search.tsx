import Data from '../data/data.json';
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="block visible relative md:mr-0 md:block">
        <form className="w-full md:w-full" action="/" method="get">
          <button className="z-14 flex flex-col w-full" type="submit">
            <div className="flex justify-center absolute top-0 pt-[10px] md:pt-[9px] left-0 items-center px-3 pointer-events-none">
              <svg className="flex justify-center items-center w-full h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </button>
          <input
            type="text"
            name="s"
            className="
            duration-200
            flex
            p-2 pl-8 sm:pt-auto sm:pl-10 w-full rounded-lg items-center
            text-white placeholder-gray-400 sm:text-sm
            bg-[#131212]
            focus:outline outline-2 outline-offset-0 outline-[#ee2057c7]
            border-gray-600 border focus:border focus:border-[#ee2058]
          "
            placeholder="Buscar por..."
            onChange={event => setQuery(event.target.value)}
          />
        </form>
        <div className="mr-28 md:mr-0">
          <ul className="absolute w-full space-y-0 overflow-y-auto h-52 mt-2">
            {
              Data.filter(post => {
                if (query === '') {
                  return false;
                } else if (post.title.toLowerCase().includes(query.toLowerCase()) || post.description.toLowerCase().includes(query.toLowerCase()) || (post.id && post.id.toLowerCase().includes(query.toLowerCase())) || (post.date && post.date.toLowerCase().includes(query.toLowerCase())) || (post.link && post.link.toLowerCase().includes(query.toLowerCase()))) {
                  return post;
                }
              }).map((post, index) => (
                <div key={index}
                  className="rounded-sm">
                  <div className="bg-[#131212] border-2 border-[#ee2058] rounded-lg space-y-2 mb-1">
                    <div className="flex-row flex">
                      <div className="flex py-3 px-2 flex-col justify-center items-center text-left">
                        <a href={post.link} className="flex justify-center items-center">
                          <h1 className="text-gray-400 text-xs pb-0">
                            Título: <span className="text-white text-xs">{post.title}</span>
                            <p className="text-gray-500">Semana #{post.id}</p>
                          </h1>
                          <img className="rounded-md h-18 w-1/4" src={post.thumbnail} />
                        </a>
                        <div className="mt-1 items-center justify-end flex w-full pb-1 text-left text-white text-xs">
                          {/* <p className="flex flex-row w-1/2">Data: {post.date}</p> */}
                          {/* <div className="w-full pb-1 text-center text-white text-xs"> */}
                          <a href={post.link} className="w-1/4 flex rounded-xs px-4 py-1 uppercase justify-center text-center hover:bg-[#a71834] bg-[#ee2850] flex-row rounded-md ">ler</a>
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

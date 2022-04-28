import Data from '../data/data.json';
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState("lorem ipsum")
  return (
    <>
      <div className="visible relative md:mr-0 md:block">
        <div className="absolute top-0 mt-2 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input
          type="text"
          id="email-address-icon"
          className="
            duration-200
            block
            p-2 pl-10 w-full rounded-lg 
            text-white placeholder-gray-400 sm:text-sm
            bg-gray-700
            focus:outline outline-2 outline-offset-0 outline-[#ee2057c7]
            border-gray-600 border focus:border focus:border-[#ee2058]
          "
          placeholder="Procurar por..."
          onChange={event => setQuery(event.target.value)}
        />
        {
          Data.filter(post => {
            if (query === '') {
              return post;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          }).map((post, index) => (
            <div key={index}>
              <p>{post.title}</p>
              <p>{post.description}</p>
              <p>{post.id}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

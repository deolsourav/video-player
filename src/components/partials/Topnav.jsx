import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "../../utils/axios";

const Topnav = ({clickHandler}) => {

  const [query, setquery] = useState("")
  const [results, setResults] = useState([])
  
  const GetSearches = async () => {
    if (!query) return;

    try {
      const response = await axios.get("/", {
        params: { s: query },
      });
      console.log(response.data);
      if (response.data.Response === "True") {
        setResults(response.data.Search);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);  
  
  return (
    <div className="w-full h-[10%] flex ">
      <i className="ri-menu-4-line text-[#02A2F7] z-8 cursor-pointer text-3xl mx-4 my-4" onClick={clickHandler}></i>
       <div className="w-full ">
         <nav className="w-full h-full flex justify-center items-center">
          <i className=" ri-search-line text-3xl text-zinc-400 hover:text-white mr-2 "></i>
          <div className="h-[70%] w-[60%] flex items-center justify-center rounded-full bg-zinc-900 border-1 border-zinc-500">
             <input 
              onChange={(e)=> setquery(e.target.value)}
              value={query}
              className=" w-[100%] h-full p-4 border-none outline-none text-xl" type="text" placeholder="Search" />
              {query.length>0 && (
                <i onClick={()=> setquery("")} 
                className="ri-close-line text-3xl mr-4 text-zinc-400 hover:text-white"></i>)} 
             
          </div>
          
        </nav>
        {query.length>0 && (<div className=" mx-45 max-h-[32vh] w-[70%] bg-transparent overflow-auto">
          {results.map((movie)=>(
            <Link>
              <div key={movie.imdbID} className=" max-h capitalize text-xl w-full bg-zinc-700 hover:bg-zinc-800 border-b-1 border-zinc-400 flex items-center">
                <img src={movie.Poster} alt="noimage.webp" className="w-7 h-7 object-cover m-2 rounded-full"/>
                <span className="">{movie.Title}</span>
              
              </div>
          </Link>))}
        </div>)}
        
       </div>
        <img className='h-10 w-10 mx-4 my-4' src="logo.png" alt="" />

    </div>
  )
}

export default Topnav
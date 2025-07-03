import { Link } from "react-router-dom"

const Topnav = ({clickHandler}) => {
  return (
    <div className="w-full h-[10%] flex ">
      <i class="ri-menu-4-line text-[#02A2F7] z-8 cursor-pointer text-3xl mx-4 my-4" onClick={clickHandler}></i>
       <div className="w-full ">
         <nav className="w-full h-full flex justify-center items-center">
          <i class=" ri-search-line text-3xl text-zinc-400 hover:text-white mr-2 "></i>
          <div className="h-[70%] w-[60%] flex items-center justify-center rounded-full bg-zinc-900 border-1 border-zinc-500">
             <input className=" w-[90%] h-full p-1 border-none outline-none text-xl" type="text" placeholder="Search" />
             <i class="ri-close-line text-3xl text-zinc-400 hover:text-white"></i>
             
          </div>
          
        </nav>
        <div className=" mx-45  h-[50vh] w-[70%] bg-transparent border-1 border-zinc-600">
          <Link>
              <div className=" h-10 p-1 capitalize text-xl w-full bg-zinc-700 hover:bg-zinc-800 border-b-1 border-zinc-400">
                <img src="" alt="" />
                <span className="">hello</span>
              </div>
          </Link>
        
        </div>
       </div>
        <img className='h-10 w-10 mx-4 my-4' src="logo.png" alt="" />

    </div>
  )
}

export default Topnav
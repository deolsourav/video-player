import { Link } from 'react-router-dom'

const Sidenav = ({sidnav}) => {
  return (
    <div className={`fixed w-[20%] h-full border-r-2 border-zinc-400 duration-300 transition-transform ${sidnav?"translate-x-0": "-translate-x-full "}`}>
        <h1 className='flex m-7 '>
            <img className='h-10 w-10 mx-2 mt-5' src="logo.png" alt="" />
        <span className='pt-6 text-2xl font-bold'>Video Player</span>
        </h1>

        <nav className=' flex flex-col mx-6 border-b-2 border-zinc-400 text-zinc-400'>
            <h1 className='text-2xl font-semibold mb-4 text-white'>New Feeds</h1>
            <Link className='text-xl px-4 py-3 rounded-xl hover:text-white hover:bg-[#02A2F7] duration-300 '><i class="ri-fire-fill"></i>Trending</Link>
            <Link className='text-xl px-4 py-3 rounded-xl hover:text-white hover:bg-[#02A2F7] duration-300 '><i class="mr-1 ri-sparkling-2-fill"></i>Popular</Link>
            <Link className='text-xl px-4 py-3 rounded-xl hover:text-white hover:bg-[#02A2F7] duration-300 '><i class="mr-1 ri-clapperboard-ai-fill"></i>Movie</Link>
            <Link className='text-xl px-4 py-3 rounded-xl hover:text-white hover:bg-[#02A2F7] duration-300 '><i class="mr-1 ri-tv-fill"></i>TV Shows</Link>
            <Link className='text-xl px-4 py-3 rounded-xl hover:text-white hover:bg-[#02A2F7] duration-300 '><i class="mr-1 ri-team-fill"></i>People</Link>
        </nav>
         <nav className=' flex flex-col mx-6 mt-5 text-zinc-400'>
            <h1 className='text-2xl font-semibold mb-4 text-white '>Website Info</h1>
            <Link className='text-xl px-4 py-3 rounded-xl hover:text-white hover:bg-[#02A2F7] duration-300 '><i class="mr-1 ri-information-fill"></i>About</Link>
            <Link className='text-xl px-4 py-3 rounded-xl hover:text-white hover:bg-[#02A2F7] duration-300 '><i class="mr-1 ri-phone-fill"></i>Contact us</Link>
        </nav>
    </div>
  )
}

export default Sidenav
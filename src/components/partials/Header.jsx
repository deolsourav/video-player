import React from 'react'

const Header = ({data}) => {
    
  return <div style={{
    background: "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7),rgba(0,0,0,.9))"
  }} className='w-[90%] h-[70vh] ml-15 '>
   
    <img className='w-full h-[70%] bg-cover bg-center z-10' src="avenger.jpg" alt="" />
   <h1 className='text-2xl text-white font-bold ml-4 mt-3'>Avengers End Game</h1>
   <p className='w-200 mt-3 text-blue-600 ml-4'>Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,</p>
   <h3 className='ml-4'>⭐⭐⭐⭐⭐</h3>
  </div>
  
}

export default Header
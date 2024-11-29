import React from 'react'
import pic from './pics/hamburger.jpg'
const Navbar = () => {
  return (
    <>
    
    <div className='bg-white text-black flex justify-between'>
      <div className='mt-2 font-serif'>
      <p>Gourmet au Catering</p>
      </div>
     <div>
     <ol className='flex p-2 justify-end gap-6 mr-4 font-serif'>
        <li>About</li>
        <li>About</li>
        <li>Menu</li>
        <li>Conntact</li>
    </ol>
     </div>
     </div>
    <div>
      <div>
      <img src={pic} alt="" className=' w-full '/>
      </div>
    
    <p className='text-4xl text-gray-700 mb-10 ml-4 font-serif absolute mt-[-4rem]'>Le Catering</p>
    </div>
    
    
    </>
  )
}

export default Navbar
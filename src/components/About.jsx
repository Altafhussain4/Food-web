import React from 'react'
import pic1 from './pics/tablesetting2.jpg'
const About = () => {
  return (
    <>
    
    <div className='flex mt-16 gap-12 m-[10rem]'>
      <img src={pic1} alt="" className='h-[40rem] rounded-md' />
      <div className='text-black '>
        <h1 className='text-3xl font-serif text-center mt-8'>About Catering</h1>
        <p className='text-center mt-12 text-l font-serif'>Tradition since 1889 </p>
        <p className='mt-6 text-sm font-serif'>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.
        </p>
        <p className='mt-4 text-gray-500 text-sm font-serif'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </p>
      </div>
    </div><hr className='mb-16' />
    
    </>
  )
}

export default About
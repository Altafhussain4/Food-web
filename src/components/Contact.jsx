import React from 'react'

const Contact = () => {
  return (
    <>
    
    <div className=' p-[10rem]'>
        <p className='text-3xl font-serif'>Contact</p>
        <p className='mt-6 text-sm'>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
        <p className='mt-4 text-lg font-serif text-gray-500'>Catering Service, 42nd Living St, 43043 New York, NY</p>
        <p className='mt-4 text-sm'>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:
        </p>

   <div>
       <input type="text" placeholder='Name' className='p-4 font-serif text-sm' /><hr /> 
    </div>
    <div>
        <input type="text" placeholder='How many people' className='p-4 font-serif text-sm' /><hr />
    </div>
    <div>        
        <input type="text" placeholder='date' className='p-4 font-serif text-sm' /><hr />
    </div>
    <div>        
        <input type="text" placeholder='Message' className='p-4 font-serif text-sm'/><hr />
    </div>
      <button className='w-fit bg-gray-200 mt-4 p-2 rounded-lg  font-serif'>Send Message</button>
    </div>
  
    </>
  )
}

export default Contact
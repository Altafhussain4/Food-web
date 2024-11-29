import React from 'react'
import pic from './pics/tablesetting.jpg'
const Manue = () => {
  return (
    <>
    
    <div className='justify-center flex gap-12'>
        <div>
        <p className='text-3xl font-serif text-center mt-6'>Our Menu</p>
        <p className='text-l font-serif mt-6'>Bread Basket</p>
        <p className='text-gray-600 font-serif text-sm mt-4'>Assortment of fresh baked fruit breads and muffins 5.50</p>
        <p className='text-l font-serif mt-6'>Honey Almond Granola with Fruits</p>
        <p className='text-gray-600 font-serif text-sm mt-4'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
        <p className='text-l font-serif mt-6'>Belgian Waffle</p>
        <p className='text-gray-600 font-serif text-sm mt-4'>Vanilla flavored batter with malted flour 7.50</p>
        <p className='text-l font-serif mt-6'>Scrambled eggs</p>
        <p className='text-gray-600 font-serif text-sm mt-4'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
        <p className='text-l font-serif mt-6'>Blueberry Pancakes</p>
        <p className='text-gray-600 font-serif text-sm mt-4'>With syrup, butter and lots of berries 8.50</p>
        </div>
        <div>
            <img src={pic} alt="" className='h-[35rem] rounded-md'/>
        </div>
    </div><hr className='mt-16' />
    
    
    </>
  )
}

export default Manue
import React from 'react'

const SelectMenu = () => {
  return (
    <form action="" className='text-black  outline-none'>
  <select name="cars" id="cars" className='outline-none rounded-l h-8 w-auto bg-gray-200'>
      <option value="">All</option>
      <option value="">Home</option>
      <option value="">Kids</option>
      <option value="">Electric</option>
      <option value="">Smartphone</option>
      <option value="">Laptops</option>
      <option value="">Cloths</option>
  
  </select>
</form>
  )
}

export default SelectMenu
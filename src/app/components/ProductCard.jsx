import Image from 'next/image'
import React from 'react'

function ProductCard() {
  return (
    <>
<div className='m-2'>
<div>
  <Image
    src={`https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg`}
          width={200}
          height={200}
          alt="Picture of the author"
           />
</div>
<div className='text-[#007185]'>{`Product Name`}</div>
<div className='text-orange-400'>{`Stars`}</div>
<div className='text-xs'>{`Deals`}</div>
<div className='text-xs'>{`Product Details`}</div>
<div className='text-sm font-semibold'>{`$ Price`}</div>
</div>
    </>
  )
}

export default ProductCard
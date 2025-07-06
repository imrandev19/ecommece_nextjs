
import Breadcrumb from '@/components/common/Breadcrumb'
import Container from '@/components/common/Container'
import Paginate from '@/components/Paginate'

import React from 'react'

const page = () => {
  
  return (
    <main>
      <Breadcrumb/>
        <Container>
        <div className='flex justify-between'>
          <div className='w-[20%] h-screen bg-red-500'></div>
       <div className='w-[78%]'>All Products
        <Paginate itemsPerPage={6}/>
       </div>
        </div>
       
        </Container>
        
    </main>
  )
}

export default page
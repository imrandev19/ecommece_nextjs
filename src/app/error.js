'use client' // Error boundaries must be Client Components
 
import Container from '@/components/common/Container'
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Container>
        <div className='py-10 text-center'>
      <h2>Something went wrong!</h2>
      <button className='bg-amber-400 px-2 py-1 text-white' 
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
    </Container>
  )
}
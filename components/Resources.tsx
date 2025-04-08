import Link from 'next/link'
import React from 'react'

const Resources = () => {
  return (
    <div>
        <h1 className='font-semibold text-xl mt-4 ml-3'>Resources</h1>
        <h3 className='ml-3'>Startup Checklist</h3>
        <Link href="Download" className='hover:text-blue-400 ml-3 underline'>Download</Link>

        <h3 className='ml-3'>Blog</h3>
        <Link href="Articles" className='hover:text-blue-400 ml-3 underline'>Explore Articles</Link>
    </div>
  )
}

export default Resources
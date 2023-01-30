import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-center'>
        <h1 className='text-8xl mb-4'>Oops!</h1>
        <p className='mb-4 text-5xl font-light'>
          404 - Page not found.
        </p>
        <Link to='/' className='btn btn-primany btn-lg'>Go Home</Link>
    </div>
  )
}

export default NotFound
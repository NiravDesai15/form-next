import { useRouter } from 'next/router'
import React from 'react'

const userdetails = () => {
    const route=useRouter()
    console.log('route', route.query.id)  
  return (
    <div>
      <h1>Nirav</h1>
    </div>
  )
}

export default userdetails

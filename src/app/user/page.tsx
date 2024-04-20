"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

function Page() {
    const session=useSession();
  return (
    <div>
      <h2>User</h2>
      <h3>{
        JSON.stringify(session.data)}</h3>
    </div>
  )
}

export default Page
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/"> 
        <Image alt="logo" src="/amazon-logo-2.webp" width={100} height={30} /> 
    </Link>
  )
}

export default Logo
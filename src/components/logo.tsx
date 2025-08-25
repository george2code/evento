import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <Image 
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        alt="EVENTO logo" 
        width={35} 
        height={12} 
    />
  )
}

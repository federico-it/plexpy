/* eslint-disable @next/next/no-img-element */

import React, { useEffect } from 'react'

import confetti from 'canvas-confetti'
import Link from 'next/link'

import Container from 'components/Container'

export default function Sent() {
  useEffect(() => {
    let ignore = false

    if (!ignore) confetti({ particleCount: 450, spread: 80 })

    return () => {
      ignore = true
    }
  }, [])
  return (
    <Container>
      <div className='flex flex-col items-center justify-center w-fit inset-0'>
        <div className=''>
          <img
            className='w-96 '
            src='https://i.postimg.cc/6pwZRYZv/love-chat-min.png'
            alt='Plex Screens and Raspberry Board'
          />
        </div>
        <div>
          <h1 className='text-3xl mt-6 mb-6 text-center font-extrabold tracking-tight '>
            MESSAGE SENT CORRECTLY ✅
          </h1>
        </div>
        <Link href='/'>
          <a className='px-28 mt-6 py-2 mx-auto text-lg font-bold text-gray-900 bg-gray-100 rounded-md dark:text-gray-100 dark:bg-gray-800'>
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  )
}

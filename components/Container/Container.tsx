import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Link from 'next/link'

import Footer from 'components/Footer/Footer'
import cn from 'lib/classNames'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()

  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    title: 'PlexPy',
    description: 'Plex Media Server and Raspberry Pi',
    image:
      'https://cdn.discordapp.com/attachments/797485737272541250/893912493255176192/UnicornVectorGradient_7.png',
    type: 'website',
    ...customMeta,
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div
        className={cn(
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none'
        )}
      >
        <Head>
          <meta name='robots' content='follow, index' />
          <meta
            property='og:url'
            content={`https://plexpy.com/${router.asPath}`}
          />
          <link rel='canonical' href={`https://plexpy.com/${router.asPath}`} />
          <title>PlexPy</title>

          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='PlexPy' />
          <meta property='og:description' content={meta.description} />
          <meta property='og:title' content={meta.title} />
          <meta property='og:image' content={meta.image} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@plexpy' />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta name='twitter:image' content={meta.image} />
          {meta.date && (
            <meta property='article:published_time' content={meta.date} />
          )}
        </Head>

        <nav className='sticky w-full bg-gray-100/40 z-[1] filter-blur dark:bg-gray-1000/40 top-2 md:top-4 max-w-6xl px-4 py-2 rounded-md mx-auto flex justify-between items-center'>
          <div className='flex flex-row md:gap-6 gap-3 text-tertiary'>
            <Link href='/'>
              <a className='transition-all uppercase font-extrabold cursor-pointer hover:text-primary'>
                Home
              </a>
            </Link>
            <Link href='/tutorial'>
              <a className='transition-all  uppercase font-extrabold  cursor-pointer hover:text-primary'>
                Tutorial
              </a>
            </Link>
            <Link href='https://forum.plexpy.com'>
              <a className='transition-all uppercase font-extrabold cursor-pointer hover:text-primary'>
                Forum
              </a>
            </Link>
            <Link href='/contacts'>
              <a className='transition-all uppercase font-extrabold cursor-pointer hover:text-primary'>
                Contacts
              </a>
            </Link>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <button
              aria-label='Toggle Dark Mode'
              type='button'
              className='flex items-center justify-center transition-all bg-gray-200 rounded-lg w-9 h-9 dark:bg-gray-600 hover:ring-2 ring-gray-300'
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {mounted && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  className='w-5 h-5 text-gray-800 dark:text-gray-200'
                >
                  {resolvedTheme === 'dark' ? (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  ) : (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </nav>

        <main
          className={cn(
            'px-4 mt-12',
            'max-w-5xl',
            'mx-auto my-auto',
            'flex flex-col justify-center gap-12',
            'divide-y divide-gray-200 dark:divide-gray-900',
            'rounded-lg'
          )}
        >
          <div>{children}</div>
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </>
  )
}

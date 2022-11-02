import Link from 'next/link'

import BigText from 'components/BigText'
import Container from 'components/Container'
export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center inset-0'>
        <BigText slides={['Plex', 'And', 'Raspberry Pi']} />
        <br></br>
        <Link href='/tutorial'>
          <a className='px-8 py-2 mx-auto text-lg font-bold text-gray-900 bg-gray-100 rounded-md dark:text-gray-100 dark:bg-gray-800'>
            See How 🔥
          </a>
        </Link>
      </div>
    </Container>
  )
}

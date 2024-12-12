import Link from 'next/link'

export default function NavBar () {
  return (
    <nav className='bg-red-600 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-white text-2xl font-bold'>
          <Link href='/'>Trailerflix</Link>
        </h1>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/trailers' className='text-white hover:underline'>Trailers
            </Link>
          </li>
          <li>
            <Link href='/about' className='text-white hover:underline'>About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

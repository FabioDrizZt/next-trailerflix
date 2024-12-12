import Link from 'next/link'

export default function Home () {
  return (
    <div className='min-h-screen bg-gray-100'>

      {/* Main Content */}
      <main className='container mx-auto mt-8 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>
          ¡Bienvenido a Trailerflix!
        </h2>
        <p className='text-gray-600 mb-6'>
          Explora los mejores trailers de películas y series.
        </p>
        <Link href='/trailers' className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'>
          Explorar Trailers
        </Link>
      </main>
    </div>
  )
}

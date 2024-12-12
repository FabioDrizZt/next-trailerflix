import Image from 'next/image'

async function fetchPeli (id) {
  const trailer = await fetch(`http://localhost:3000/api/trailers/${id}`)
  return trailer.json()
}

export default async function MovieDetail ({ params }) {
  const { id } = await params
  const pelicula = await fetchPeli(id)

  return (
    <div className='bg-black'>
      <div className='text-white text-center text-3xl font-bold p-4'>
        <h1>Detalles de la Película</h1>
      </div>
      <main className='container mx-auto p-4'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/3'>
            <Image priority width={250} height={500} src={`${pelicula?.poster}`} alt={pelicula?.titulo} className='w-full h-auto rounded-lg' />
          </div>
          <div className='md:w-2/3 md:ml-4'>
            <h2 className='text-2xl font-bold mb-2'>{pelicula?.titulo}</h2>
            <p className='text-gray-300 mb-4'>
              <strong>Resumen:</strong> {pelicula?.resumen}
            </p>
            <iframe
              width='560'
              height='315'
              src={pelicula?.trailer}
              allowFullScreen
              className='w-full mb-4'
            />
            <p className='text-gray-300'>
              <strong>Reparto:</strong> {pelicula?.reparto}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

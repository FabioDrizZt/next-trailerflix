import Image from 'next/image'
import Link from 'next/link'

async function fetchTrailers () {
  const trailers = await fetch('http://localhost:3000/api/trailers')
  return trailers.json()
}

export default async function trailerPage () {
  const trailers = await fetchTrailers()

  return (
    <main className='grid grid-cols-3 gap-4'>
      {trailers.map(trailer =>
        <Link className='card' key={trailer?.id} href={`movie/${trailer?.id}`}>
          <div className='card-picture'>
            <Image priority width={150} height={300} src={trailer?.poster} alt={trailer?.titulo} title={trailer?.titulo} />
          </div>
          <div className='card-bottom'>
            <p className='card-bottom-title'>{trailer?.titulo}</p>
          </div>
        </Link>
      )}
    </main>
  )
}

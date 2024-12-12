import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'public', 'data', 'trailerflix.json')

export async function GET (request, { params }) {
  const { id } = await params
  const data = fs.readFileSync(dataPath, 'utf-8')
  const trailerflix = JSON.parse(data)

  const trailer = trailerflix.find(t => t.id === parseInt(id))

  if (!trailer) {
    return NextResponse.json({ error: 'trailer not found' }, { status: 404 })
  }

  return NextResponse.json(trailer)
}

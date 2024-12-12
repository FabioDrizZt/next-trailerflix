import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'public', 'data', 'trailerflix.json')

export async function GET (request) {
  const data = fs.readFileSync(dataPath, 'utf-8')
  const trailers = JSON.parse(data)
  return NextResponse.json(trailers)
}

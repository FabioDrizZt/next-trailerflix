import NavBar from './components/NavBar'
import './globals.css'

export const metadata = {
  title: 'TrailerFlix',
  description: 'El mejor lugar para ver tus trailers favoritos'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

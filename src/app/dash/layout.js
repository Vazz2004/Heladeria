
import { Inter } from 'next/font/google'
import '../globals.css'
const inter = Inter({ subsets: ['latin'] })
import NavDash from '../ui/navDash.jsx'
export const metadata = {
  title: 'SamHeladeria',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className={inter.className}>
        <NavDash />
        {children}
      </body>
    
    </html>
  )
}

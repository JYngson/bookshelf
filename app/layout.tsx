import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import Login from '@/components/login/Login';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bookshelf',
  description: 'Bookshelf App by James Yngson',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  const session = await getServerSession(authConfig)
  if(session){
    return (
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    )
  } else {
    return(
      <html lang="en">
        <body>
          <Login />
        </body>
      </html>
    )
  }
}

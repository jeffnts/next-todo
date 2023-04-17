import './globals.css'

import  Providers from './providers'

export const metadata = {
  title: 'To-Do App',
  desccription: 'A simple to do app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

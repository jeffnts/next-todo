import './globals.css'

import  Providers from './providers'

export const metadata = {
  title: 'To-Do App'
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

import './globals.css'

import { Providers } from './providers'

export const metadata = {
  title: 'To-Do App'
}

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: any
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

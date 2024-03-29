import { 
  Body,
  Navbar,
  Sidenav } from 'components' 

export const metadata = {
  title: 'To-Do App | Home'
}

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <Body>
        <Navbar />
        <div
          className='mx-6 mb-6 flex flex-row gap-4 mt-6'
        >
          <Sidenav />
          <div 
            className='max-sm:flex max-sm:px-0  px-20 pt-2 w-full'
          >
            { children }
          </div>
        </div>
      </Body>
    )
  }
  
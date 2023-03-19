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
            className='max-sm:p-2  px-20 pt-10 w-full'
          >
            { children }
          </div>
        </div>
      </Body>
    )
  }
  
import dynamic from 'next/dynamic'

const ProfilePage = dynamic(() => import('./ProfilePage'))

export {
    ProfilePage
}
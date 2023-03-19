import dynamic from 'next/dynamic'

const LoginPage = dynamic(() => import('./components/LoginPage'))

export default function Login (){
  return <LoginPage />
}
import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar.tsx'
import Footer from './Footer.tsx'

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}
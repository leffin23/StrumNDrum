import { Outlet } from 'react-router-dom'
import Cart from './cart/Cart'
import Header from './header'
import { useSelector } from 'react-redux'
import Footer from './Footer'

const Layout = () => {

  const statusCart = useSelector(store => store.cart.statusCart)

  return (
    <>
      <main className={`container ${statusCart === false ? "" : "move"}`}>
        <Header/>
        <Outlet/>
        <Footer/>
      </main>
      <Cart/>

    </>
  )
}

export default Layout

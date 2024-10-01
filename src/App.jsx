import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './components//products/Product'
import NoFound from './pages/NoFound'

function App() {

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:productId' element={<Product/>}></Route>
      <Route path="*" element={<NoFound />} />
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App

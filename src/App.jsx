import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Cart } from './Pages/Cart'
import { Navbar } from './Components/Navbar'
import store from './Store/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>

    </div>    
  )
}

export default App

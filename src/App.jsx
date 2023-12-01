import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import ItemGallery from './pages/ItemGallery'
import ItemPage from './pages/ItemPage'
import RandomItemPage from './pages/RandItemPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/all-beers" element={ <ItemGallery/> }/>
        <Route path="/beer-details/:id" element={ <ItemPage/> }/>
        <Route path="/random-beer" element={ <RandomItemPage/> }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

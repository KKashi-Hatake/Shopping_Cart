import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Cart from "./components/Cart"
import {Toaster} from "react-hot-toast"
import "./sass/mediaquery.scss"



import "./sass/App.scss"



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/cart" element={<Cart/>}  />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
//font-family: 'Roboto', sans-serif;
import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import Income from "./pages/Income";
import Promote from "./pages/Promote";
import Help from "./pages/help";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/customers' element={<Customers/>}/>
        <Route path='/income'  element={<Income/>}/>
        <Route path='/promote' element={<Promote/>}/>
        <Route path='/help' element={<Help/>}/>
      </Route>
    </Routes>
  );
}

export default App;

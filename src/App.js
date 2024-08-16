import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Customers from "./pages/Customers/Customers";
import Income from "./pages/Income";
import Promote from "./pages/Promote";
import Help from "./pages/Help";

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

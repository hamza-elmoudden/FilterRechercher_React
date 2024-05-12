import { Producte } from "./page/Producte";
import { Routes,Route } from "react-router-dom";

function App() {


  
  return (
    <>
      <Routes>   
          <Route path='/' element={<Producte/>}/>
        </Routes>
    </>
  )
}

export default App;

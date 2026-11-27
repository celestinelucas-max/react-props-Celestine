import { BrowserRouter as Router , Routes, Route } from "react-router-dom"

import Homepage from './pages/Homepage';
import SpotList from './pages/listpage';
import CreateSpot from './pages/createpage';
import SpotProvider from "./context/spotcontext";
import Navbar from './components/nav';



export default function App() {

    return (


      <SpotProvider>


            <Router>
                <Navbar/>
                <Routes>
                    
                    <Route path="" element ={<Homepage/>} />

                    <Route path="spotlist" element ={<SpotList/>} />

                    <Route path="createspot" element ={<CreateSpot/>} />



                </Routes>
            </Router>
      </SpotProvider>
  
    )
}

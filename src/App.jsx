import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import SpotList from "./pages/listpage";
import CreateSpot from "./pages/createpage";
import UpdateSpot from "./pages/updatepage";
import Navbar from "./components/nav";
import  SpotProvider  from "./context/spotcontext";



export default function App() {

    return (

        <SpotProvider> 
            <Router>
                <Navbar/>
                <Routes>
                    
                    <Route path="" element ={<Homepage/>} />

                    <Route path="spotlist" element ={<SpotList/>} />

                    <Route path="createspot" element ={<CreateSpot/>} />

                    <Route path="updatespot" element ={<UpdateSpot/>} />


                </Routes>
            </Router>
        </SpotProvider>  
    )
}

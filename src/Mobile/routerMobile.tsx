 
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Dashbord";
import BodyBuilding from "./Dashbord/BodyBuilding/bodybuilding";
import Bofe from "./Dashbord/Bofe/bofe";
import BofeBodyBuilding from "./Dashbord/Bofe/bofeBodyBuilding";
import Boling from "./Dashbord/Boling/boling";
import Cafe from "./Dashbord/Cafe/cafe";
import Masaj from "./Dashbord/Masaj/masaj";
import MasajBodyBuilding from "./Dashbord/Masaj/masajBodyBuilding";
import Pool from "./Dashbord/Pool/Pool";
import Resturan from "./Dashbord/Resturan/resturan";
import Login from "./Login/loginMobile";
import Register from "./Register/register";
 
 

const RouterMobile =() =>{

    return(
        <div>
 
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="dashbord" element={<Dashbord/>} />
                <Route path="resturan" element={<Resturan/>} />
                <Route path="cafe" element={<Cafe/>} />
                <Route path="bofe" element={<Bofe/>} />
                <Route path="bofebodybuilding" element={<BofeBodyBuilding/>} />
                <Route path="pool" element={<Pool/>} />
                <Route path="bodybuilding" element={<BodyBuilding/>} />
                <Route path="boling" element={<Boling/>} />
                <Route path="masaj" element={<Masaj/>} />
                <Route path="masajbodybuilding" element={<MasajBodyBuilding/>} />
            </Routes>
       
        </div>  
    );
}

export default RouterMobile;
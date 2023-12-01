import HeaderBofe from "../Header/HeaderBofe";
 
 

 import { Button,  Image, Tooltip } from 'antd';
 
 import './bofe.css';
 import './../../fonts/irsans.ttf';
import './../dashbord.css';


 import { Navigate, useNavigate } from 'react-router-dom';

const Bofe =() => {
   
     let navigate = useNavigate();

     const F_BofeBodyBuilding = () =>{
           navigate('/bofebodybuilding');  
     }
      
    return(
        <>
        <HeaderBofe  /> 
         
         
        <div style={{width:'90%', height:'100vh' , marginTop:'110px' , marginRight:'5%', marginLeft:'5%' , justifyContent:'start' , alignContent:'start' , flexDirection:'column'  ,    display:'flex'}}>
             
         <Button type="dashed" style={{height:'50px', fontSize:'14px',   fontFamily:'irsans'}} shape="default" onClick={F_BofeBodyBuilding} >
           بوفه بدنسازی
         </Button>
            <br />
         <Button type="dashed" style={{height:'50px', fontSize:'14px',  fontFamily:'irsans'}} shape="default">
           بوفه استخر
         </Button>
         <br />
         <Button type="dashed" style={{height:'50px', fontSize:'14px',  fontFamily:'irsans'}} shape="default">
           بوفه بولینگ
         </Button>


        </div>
        </>
    );
}


export default Bofe;
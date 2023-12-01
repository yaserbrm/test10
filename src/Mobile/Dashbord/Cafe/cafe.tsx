import HeaderCafe from "../Header/HeaderCafe";
 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import { Button,  Image, Tooltip } from 'antd';
 
import cafe1 from "../../images/cafe/cafe1.jpg";
import cafe2 from "../../images/cafe/cafe2.jpg";
import cafe3 from "../../images/cafe/cafe3.jpg";
import cafe4 from "../../images/cafe/cafe4.jpg";
import { CaretLeftOutlined, CaretRightOutlined   } from '@ant-design/icons';

 
import './../../fonts/irsans.ttf';
import './../dashbord.css';

const ArrowL= () =>{
   return (
    <>
       <CaretLeftOutlined  style={{fontWeight:'600'}}/>
    </>
   );
}
const ArrowR= () =>{
      return (
         <>
            <CaretRightOutlined style={{fontWeight:'600'}}/>
         </>
   );
  }
const Cafe =() => {
   
  const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 4 },
};

const items = [
  <div className="item" data-value="1"  style={{ textAlign:'center', marginRight:'3px' }}>
     <Button block type="dashed"  style={{height:'35px', fontFamily:'irsans' ,padding: '0px' , fontSize:'12px'}} >
     اسپرسو بار
    </Button>
</div>,
  <div className="item" data-value="2"  style={{  marginRight:'3px' }}>
     <Button  block  type="dashed" style={{ height:'35px', fontFamily:'irsans' ,padding: '0px' ,  fontSize:'12px'}} >
     قـهوه دمـی
    </Button>
  </div>,
  <div className="item" data-value="3" style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed" style={{ height:'35px', fontFamily:'irsans' ,padding: '0px' , fontSize:'12px'}} >
    آیس کافـی
    </Button>
  </div>,
  <div className="item" data-value="4" style={{ textAlign:'center', marginRight:'3px' }}>
     <Button block type="dashed" style={{ height:'35px', fontFamily:'irsans' ,padding: '0px' , fontSize:'12px'}} >
     نوشیدنی گرم
     </Button>
  </div>,
  <div className="item" data-value="5"  style={{  textAlign:'center', marginRight:'3px' }}>
      <Button block type="dashed" style={{height:'35px', fontFamily:'irsans' , padding: '0px' ,fontSize:'12px'}}  >
      دمـنوش ها
    </Button>
  </div>,
   <div className="item" data-value="6"  style={{ textAlign:'center', marginRight:'3px' }}>
       <Button block type="dashed"  style={{height:'35px',fontFamily:'irsans' ,padding: '0px' , fontSize:'12px'}}>
       چای
       </Button>
  </div>,
   <div className="item" data-value="7"  style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed"  style={{height:'35px', fontFamily:'irsans' , padding: '0px' ,fontSize:'12px'}}>
    مـاکـتیـل
    </Button>
  </div>,

  <div className="item" data-value="8"  style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed"  style={{height:'35px',fontFamily:'irsans' ,padding: '0px' ,fontSize:'12px'}}>
    سردنوش
    </Button>
  </div>,
  <div className="item" data-value="9"  style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed"  style={{ height:'35px', fontFamily:'irsans' ,padding: '0px' ,fontSize:'12px'}}>
    آبمیوه طبیعی
    </Button>
  </div>,
  <div className="item" data-value="10"  style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed"   style={{ height:'35px', fontFamily:'irsans' , padding: '0px' ,fontSize:'12px'}}>
    اسموتی
    </Button>
  </div>,


];

      
    return(
        <>
        <HeaderCafe  /> 
        <br /> <br /> <br />
        
        <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableDotsControls={true}
                renderPrevButton={( )=>{return <ArrowL/>}}
                renderNextButton={( )=>{return <ArrowR />}}
            />

 

        <div style={{   flexWrap:'wrap' , direction:'rtl' , marginTop:'0px' , marginBottom:'30px',  display:'inline-flex'}}>
            <div style={{width:'32%' , textAlign:'center', marginTop:'15px',  marginRight:'4px'}}>
                <Image src={cafe1} width={120}   height={115}/>
                <div style={{minHeight:'40px' , marginTop:'10px', fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingRight:'0px'}}>
                لاتــه
                </div>
                <div style={{fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                85.000  T
                </div>
                <div>
                <Button type="primary"  style={{fontFamily:'irsans' ,background:'green' , marginTop:'15px',  marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>
            <div style={{width:'32%', textAlign:'center', marginTop:'15px' ,  marginRight:'4px'}}>
                <Image src={cafe2} width={120}   height={115}/>
                <div style={{minHeight:'40px' ,marginTop:'10px',fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingRight:'0px'}}>
                آیس آمریکانو
                </div>
                <div style={{fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                80.000  T
                </div>
                <div>
                <Button type="primary"  style={{fontFamily:'irsans' ,background:'green' , marginTop:'15px',  marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'32%', textAlign:'center', marginTop:'15px',  marginRight:'4px'}}>
                <Image src={cafe3} width={120}   height={115}/>
                <div style={{minHeight:'40px' ,marginTop:'10px',fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingRight:'0px'}}>
                دمنوش گل گاو زبان
                </div>
                <div style={{fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                   60.000  T
                </div>
                <div>
                <Button type="primary"  style={{fontFamily:'irsans' ,background:'green' , marginTop:'15px', marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'32%', textAlign:'center', marginTop:'15px',  marginRight:'4px'}}>
                <Image src={cafe4} width={120}   height={115}/>
                <div style={{minHeight:'40px' ,marginTop:'10px',fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingRight:'0px'}}>
                هرمس
                </div>
                <div style={{fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0x'}}>
                   95.000  T
                </div>
                <div>
                <Button type="primary"  style={{fontFamily:'irsans' ,background:'green' , marginTop:'15px',  marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

        </div>
        </>
    );
}


export default Cafe;
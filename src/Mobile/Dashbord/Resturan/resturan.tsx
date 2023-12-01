import HeaderResturan from "../Header/HeaderResturan";
 
 

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Button,  Image, Tooltip } from 'antd';
 
import food1 from "../../images/resturan/barg.jpg";
import food2 from "../../images/resturan/salad4.jpg";
import food3 from "../../images/resturan/soup2.jpg";
import food4 from "../../images/resturan/sib1.jpg";
import { CaretLeftOutlined, CaretRightOutlined   } from '@ant-design/icons';

 
import './../../fonts/irsans.ttf';
import './../dashbord.css';

const ArrowL= () =>{
   return (
    <>
       <CaretLeftOutlined style={{fontWeight:'600'}}/>
    </>
   );
}
const ArrowR= () =>{
      return (
         <>
            <CaretRightOutlined  style={{fontWeight:'600'}}/>
         </>
   );
}
const Resturan =() => {
    
      const responsive = {
        0: { items: 3 },
        568: { items: 3 },
        1024: { items: 4 },
    };

 
    const items = [
      <div className="item" data-value="1"  style={{ textAlign:'center', marginRight:'3px' }}>
         <Button block type="dashed"  style={{height:'35px', fontFamily:'irsans'  ,padding: '0px' , fontSize:'12px'}} >
          پیش غذاها 
        </Button>
    </div>,
      <div className="item" data-value="2"  style={{  marginRight:'3px' }}>
         <Button  block  type="dashed" style={{height:'35px', fontFamily:'irsans' , padding: '0px' ,  fontSize:'12px'}} >
         پیش غذاهای فرنگی
        </Button>
      </div>,
      <div className="item" data-value="3" style={{ textAlign:'center', marginRight:'3px' }}>
        <Button block type="dashed" style={{height:'35px', fontFamily:'irsans' , padding: '0px' , fontSize:'12px'}} >
        سالادها
        </Button>
      </div>,
      <div className="item" data-value="4" style={{ textAlign:'center', marginRight:'3px' }}>
         <Button block type="dashed" style={{height:'35px',fontFamily:'irsans' , padding: '0px' , fontSize:'12px'}} >
          غذای اصلی
         </Button>
      </div>,
      <div className="item" data-value="5"  style={{  textAlign:'center', marginRight:'3px' }}>
          <Button block type="dashed" style={{height:'35px', fontFamily:'irsans' , padding: '0px' ,fontSize:'12px'}}  >
         سینی‌ها
        </Button>
      </div>,
       <div className="item" data-value="6"  style={{ textAlign:'center', marginRight:'3px' }}>
           <Button block type="dashed"  style={{height:'35px', fontFamily:'irsans' ,padding: '0px' , fontSize:'12px'}}>
          خوراک ها
           </Button>
      </div>,
       <div className="item" data-value="7"  style={{ textAlign:'center', marginRight:'3px' }}>
        <Button block type="dashed"  style={{height:'35px', fontFamily:'irsans' , padding: '0px' ,fontSize:'12px'}}>
        چلوها
        </Button>
      </div>,

      <div className="item" data-value="8"  style={{ textAlign:'center', marginRight:'3px' }}>
        <Button block type="dashed"  style={{height:'35px', fontFamily:'irsans' ,padding: '0px' ,fontSize:'12px'}}>
        دیزی
        </Button>
      </div>,
      <div className="item" data-value="9"  style={{ textAlign:'center', marginRight:'3px' }}>
        <Button block type="dashed"  style={{height:'35px', fontFamily:'irsans' , padding: '0px' ,fontSize:'12px'}}>
        غذای مخصوص
        </Button>
      </div>,
      <div className="item" data-value="10"  style={{ textAlign:'center', marginRight:'3px' }}>
        <Button block type="dashed"   style={{  height:'35px', fontFamily:'irsans' ,padding: '0px' ,fontSize:'12px'}}>
        نوشیدنی ها
        </Button>
      </div>,


  ];
    
    return(
        <>
        <HeaderResturan  /> 
        <br /> <br /> <br />
        
        

        <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableDotsControls={true}
                renderPrevButton={( )=>{return <ArrowL/>}}
                renderNextButton={( )=>{return <ArrowR/>}}
                
            />


        <div style={{    flexWrap:'wrap' , direction:'rtl' , marginTop:'0px' , marginBottom:'30px',  display:'inline-flex'}}>
            <div style={{width:'32%' , textAlign:'center', marginTop:'15px',  marginRight:'4px'}}>
                <Image src={food1} width={120}   height={115}/>
                <div style={{minHeight:'40px' , marginTop:'10px', fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingRight:'0px'}}>
                  کباب برگ مخصوص
                </div>
                <div style={{fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                   425.000 T
                </div>
                <div>
                <Button type="primary"  style={{fontFamily:'irsans' , background:'green' , marginTop:'15px', marginBottom:'20px',  fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>
            <div style={{width:'32%', textAlign:'center', marginTop:'15px' ,  marginRight:'4px'}}>
                <Image src={food2} width={120}   height={115}/>
                <div style={{minHeight:'40px' , marginTop:'10px',fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingRight:'0px'}}>
                   سالاد سزار با مرغ سوخاری
                </div>
                <div style={{fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                   260.000 T
                </div>
                <div>
                <Button type="primary"  style={{fontFamily:'irsans' , background:'green' , marginTop:'15px',  marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'32%', textAlign:'center', marginTop:'15px' ,  marginRight:'4px'}}>
                <Image src={food3} width={120}   height={115}/>
                <div style={{minHeight:'40px' , marginTop:'10px',fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingRight:'0px'}}>
                سوپ جو
                </div>
                <div style={{fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                   80.000  T
                </div>
                <div>
                <Button type="primary"  style={{fontFamily:'irsans' , background:'green' , marginTop:'15px', marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'32%', textAlign:'center', marginTop:'15px' , marginRight:'4px'}}>
                <Image src={food4} width={120}   height={115}/>
                <div style={{minHeight:'40px' , marginTop:'10px',fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingRight:'0px'}}>
                سیب زمینی سرخ کرده
                </div>
                <div style={{fontFamily:'irsans' , fontSize:'11px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0x'}}>
                   95.000  T
                </div>
                <div>
                <Button type="primary"  style={{fontFamily:'irsans' , background:'green' , marginTop:'15px',  marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

        </div>
        </>
    );
}


export default Resturan;
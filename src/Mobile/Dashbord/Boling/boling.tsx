import HeaderBoling from "../Header/HeaderBoling";
 
import { useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
 
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { Col, Row ,Radio, Select, Button, InputNumber , Input, InputRef} from "antd";

import './../../fonts/irsans.ttf';
import './../dashbord.css';

const Boling = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
    
    const optionsSet = [];
   
    optionsSet.push({
      value:  "1",
      label: " یک"   +  " نفره" + "  .. " +  " ده " + "  دقیقه"  ,
    });
    optionsSet.push({
        value:  "2",
        label: " دو"   +  " نفره" + "  .. " +  " بیست " + "  دقیقه"  ,
    });
    optionsSet.push({
        value:  "3",
        label: " سه"   +  " نفره" + "  .. " +  " سی " + "  دقیقه"  ,
    });
    optionsSet.push({
      value:  "4",
      label: " چهار"   +  " نفره" + "  .. " +  " چهل " + "  دقیقه"  ,
     });

    const optionsTime = [];
    
    optionsTime.push({
        value:  "1",
        label:  "12:00",
    });
    optionsTime.push({
        value:  "2",
        label:  "13:00",
    });
    optionsTime.push({
        value:  "3",
        label:  "14:00",
    });
    optionsTime.push({
      value:  "4",
      label:  "15:00",
    });
    optionsTime.push({
    value:  "5",
    label:  "16:00",
    });
    optionsTime.push({
      value:  "6",
      label:  "17:00",
    });
    optionsTime.push({
      value:  "7",
      label:  "18:00",
    });

    return(
        <>
           <HeaderBoling  /> 
           <br /> <br />  

           <div style={{ width:'70%',  marginTop:'60px'}}>
           <Row  style={{textAlign:'right'}} dir="rtl">
              
              <Col span={24} style={{  fontSize:'13px' , fontFamily:'irsans',  paddingBottom:'5px'}}>
                  تاریخ : 
              </Col>
                 
            </Row>
            <Row  style={{textAlign:'right'}} dir="rtl">
                
                <Col  span={24}>
                <DatePicker 
                    style={{
                      fontSize:'13px' , fontFamily:'irsans', 
                      width:'75%',
                      height:'38px'
                  }}
                  containerStyle={{
                    fontSize:'13px' , fontFamily:'irsans', 
                  }}
                    className="green"
                    weekDays={weekDays}
                    format={"YYYY/MM/DD"}
                    calendar={persian}
                    locale={persian_fa}
                    value={dateTime}
                    />
                </Col>
             </Row>
             <br />
             <Row  style={{textAlign:'right'}} dir="rtl">
              
              <Col span={24} style={{  fontSize:'13px' , fontFamily:'irsans',  paddingBottom:'5px'}}>
                 ست   :  
              </Col>
                 
             </Row>
             <Row  style={{textAlign:'right'}} dir="rtl">
                
                <Col span={24}>
                <Select
                        size="large"
                        defaultValue="1"
                        
                        style={{
                          width: '60.5%',
                        }}
                        options={optionsSet}
                        placement="bottomLeft"
                   />
                </Col>
             </Row>
             <br />
             <Row  style={{textAlign:'right'}} dir="rtl">
              
              <Col span={24} style={{  fontSize:'13px' , fontFamily:'irsans', paddingBottom:'5px'}}>
              ساعت   :  
              </Col>
                 
             </Row>
             <Row  style={{textAlign:'right'}} dir="rtl">
                
                <Col span={24}>
                <Select
                        size="large"
                        defaultValue="1"
                        
                        style={{
                          width: '60.5%',
                        }}
                        options={optionsTime}
                        placement="bottomLeft"
                   />
                </Col>
             </Row>
             <br />
             <Row  style={{textAlign:'right'}} dir="rtl">
              
              <Col span={24} style={{ fontSize:'13px' , fontFamily:'irsans',  paddingBottom:'5px', paddingRight:'3px'}}>
                  قیمت   :  
              </Col>
                 
             </Row>
             <Row  style={{textAlign:'center'}} dir="rtl">
               
               <Col span={24} style={{  marginRight:'-15px', color:'red',    fontSize:'14px' , fontFamily:'irsans' ,  paddingBottom:'5px' }}>
                  90,000 تومان
               </Col>
            </Row>
            <Row  style={{textAlign:'right'}} dir="rtl">
              
                <Col span={24} style={{paddingTop:'5px' }}>
                <Button type="primary"    size="large"   style={{ width:'62%' , fontSize:'13px' , fontFamily:'irsans',  background:'green' , marginTop:'20px', marginBottom:'10px',  }}>
                   رزرو بولینگ
                </Button>
                </Col>
             </Row>
             <br />
           </div>
         
        </>
    );
}

export default Boling;
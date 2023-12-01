import React, { useRef, useState } from "react";
import { Col, Row , Input , Button, InputRef } from 'antd';
import { MobileOutlined ,LockOutlined} from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';

import './../fonts/irsans.ttf';

import  './login.css';

const Login =()=>{
  
    let navigate = useNavigate();
    const inputElementMobile = useRef<InputRef | null>(null);

    const inputElement1 = useRef<InputRef>(null);
    const inputElement2 = useRef<InputRef>(null);
    const inputElement3 = useRef<InputRef | null>(null);
    const inputElement4 = useRef<InputRef | null>(null);
    const inputElement5 = useRef<InputRef | null>(null);

    const [mobile, setMobile] = useState("");
    const [activeCode1, setActiveCode1] = useState("");
    const [activeCode2, setActiveCode2] = useState("");
    const [activeCode3, setActiveCode3] = useState("");
    const [activeCode4, setActiveCode4] = useState("");
    const [activeCode5, setActiveCode5] = useState("");

    const [isactiveCode1, setIsActiveCode1] = useState(false);
    const [isactiveCode2, setIsActiveCode2] = useState(false);
    const [isactiveCode3, setIsActiveCode3] = useState(false);
    const [isactiveCode4, setIsActiveCode4] = useState(false);
    const [isactiveCode5, setIsActiveCode5] = useState(false);

    const [isShow, setIsShow] = useState(true);

    const ChangeMobile = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
          setMobile(e.target.value);
        }
      };
      const ChangeActiveCodeText1 = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode1(e.target.value);
        }
      };
      const ChangeActiveCodeText2 = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode2(e.target.value);
        }
      };
      const ChangeActiveCodeText3 = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode3(e.target.value);
        }
      };
      const ChangeActiveCodeText4= (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode4(e.target.value);
        }
      };
      const ChangeActiveCodeText5 = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode5(e.target.value);
        }
      };

      const F_SendActiveCode = () => {
        if(mobile !="" && mobile.length == 11)
           setIsShow(false);
         else
          inputElementMobile.current?.focus();   
      };

   
      const F_Login =() =>{
        if(mobile !="" && activeCode1 !="" && activeCode2 !=""&& activeCode3 !=""&& activeCode4 !=""&& activeCode5 !=""){
         
          navigate('/register');
        }
      }
      
      const styles = {
        Show:{
          display: isShow ? "flex" : "none"
        },
        Hide:{
            display:  !isShow ? "flex" : "none"
        },
        Focus1:{
            borderBottom: isactiveCode1 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
        Focus2:{
            borderBottom: isactiveCode2 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
        Focus3:{
            borderBottom: isactiveCode3 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
        Focus4:{
            borderBottom: isactiveCode4 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
        Focus5:{
            borderBottom: isactiveCode5 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
      };

    return(
         <>
            
                <Row style={{  height:'100vh' , marginTop:'-60px' , justifyContent:'center' , alignContent:'center', alignItems:'center' , ... styles.Show}} >
                    <Col span={3}></Col>
                    <Col span={18}  >
                    <div style={{textAlign:'right' , marginBottom:'14px' , fontSize:'13px' ,  fontFamily: 'irsans'  , color:'#000'}}>شماره موبایل</div>
                    <div>  <Input inputMode="numeric" ref={inputElementMobile} placeholder="" size="large"   value={mobile}  onKeyDown={(event)=>{  if (mobile.length  == 11 ) {  if(event.key === 'Backspace'){} else { event.preventDefault();}} else if( event.key === 'e' || event.key === 'E' || event.key === '-' || event.key === '+'|| event.key === '.') {event.preventDefault()} }} onChange={ChangeMobile}        prefix={<MobileOutlined  style={{ fontSize: '20px ' }} />} /> </div>
                    <div>  <Button onClick={F_SendActiveCode} size="large" type="primary" block  style={{  fontSize:'13px' , fontFamily: 'irsans'  ,marginTop:'16px' ,  }}  >  ارسال کد </Button></div>
                    
                    <div style={{marginTop:'50px' , direction:'rtl' , paddingRight:'10px'}}>
                        <span style={{color:'red'}}>*</span>
                        <span style={{textAlign:'justify', paddingRight:'14px' ,   color: '#bababa', fontFamily: 'irsans'  , fontSize:'12px' ,  }}>
                           برای ارسال کد فعال سازی ، لطفا شماره موبایل خود را بصورت صحیح وارد نمایید.
                        </span>
                    </div>

                    </Col>
                    <Col span={3}>
                     
                    </Col>
                </Row>

            
                
               
                    <Row   style={{  height:'100vh' ,   marginTop:'-60px' , justifyContent:'center' , alignContent:'center', alignItems:'center ' ,  ...styles.Hide}} >
                    <Col span={3}></Col>
                    <Col span={18}  >
                    <div style={{textAlign:'right' , marginBottom:'14px' , fontSize:'13px' ,  fontFamily: 'irsans'  , color:'#000'}}>کد فعال سازی  </div>
                    <div className="StyleActiveCode"> 
                         <LockOutlined style={{fontSize:'20px', marginTop:'10px'}} />
                         <Input ref={inputElement1} inputMode="numeric"   size="large" onKeyDown={(event)=>{  if (event.key === 'Backspace'   || event.key === 'e' || event.key === 'E' || event.key === '-' || event.key === '+'|| event.key === '.'){ event.preventDefault()} else { }}} onKeyUp={(event)=>{if(activeCode1.length == 1){ inputElement2.current?.focus();}}} value={activeCode1} onChange={ChangeActiveCodeText1}  onFocus={()=>{ inputElement1.current?.select(); setIsActiveCode1(true)}}  onBlur={()=>{setIsActiveCode1(false)}} placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'7%' , height:'30px' , width:'11%',  borderRadius:'0px' ,   ...styles.Focus1 }}  />   
                         <Input ref={inputElement2} inputMode="numeric"  size="large" onKeyDown={(event)=>{  if (event.key === 'Backspace'   || event.key === 'e' || event.key === 'E' || event.key === '-' || event.key === '+'|| event.key === '.'){ event.preventDefault()} else { }}} onKeyUp={(event)=>{if(activeCode2.length == 1){ inputElement3.current?.focus();}}} value={activeCode2} onChange={ChangeActiveCodeText2}  onFocus={()=>{ inputElement2.current?.select(); setIsActiveCode2(true)}}  onBlur={()=>{setIsActiveCode2(false)}}  placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'6%' ,  height:'30px' ,  width:'11%',   borderRadius:'0px' , ...styles.Focus2  }} />   
                         <Input ref={inputElement3} inputMode="numeric"  size="large" onKeyDown={(event)=>{  if (event.key === 'Backspace'   || event.key === 'e' || event.key === 'E' || event.key === '-' || event.key === '+'|| event.key === '.'){ event.preventDefault()} else { }}} onKeyUp={(event)=>{if(activeCode3.length == 1){ inputElement4.current?.focus();}}} value={activeCode3} onChange={ChangeActiveCodeText3}  onFocus={()=>{ inputElement3.current?.select(); setIsActiveCode3(true)}}  onBlur={()=>{setIsActiveCode3(false)}}  placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'6%' ,  height:'30px' ,  width:'11%',   borderRadius:'0px' , ...styles.Focus3  }} />   
                         <Input ref={inputElement4} type="number" size="large" onKeyDown={(event)=>{  if (event.key === 'Backspace'   || event.key === 'e' || event.key === 'E' || event.key === '-' || event.key === '+'|| event.key === '.'){ event.preventDefault()} else { }}} onKeyUp={(event)=>{if(activeCode4.length == 1){ inputElement5.current?.focus();}}} value={activeCode4} onChange={ChangeActiveCodeText4}  onFocus={()=>{ inputElement4.current?.select(); setIsActiveCode4(true)}}  onBlur={()=>{setIsActiveCode4(false)}}  placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'6%' ,  height:'30px' ,  width:'11%',   borderRadius:'0px' , ...styles.Focus4 }} />   
                         <Input ref={inputElement5} type="number" size="large" onKeyDown={(event)=>{  if (event.key === 'Backspace'   || event.key === 'e' || event.key === 'E' || event.key === '-' || event.key === '+'|| event.key === '.'){ event.preventDefault()} else { }}} onKeyUp={(event)=>{if(activeCode5.length == 1){ inputElement5.current?.select();}}}  value={activeCode5} onChange={ChangeActiveCodeText5}  onFocus={()=>{ inputElement5.current?.select(); setIsActiveCode5(true)}}  onBlur={()=>{setIsActiveCode5(false)}}  placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'6%' ,  height:'30px' ,  width:'11%',   borderRadius:'0px' , ...styles.Focus5  }} />   
                     
                        
                    </div>
                    
                    <div>  <Button onClick={F_Login} size="large" type="primary" block  style={{  fontFamily: 'irsans'  , marginTop:'16px' ,  fontSize:'13px' ,}} >   ورود   </Button></div>
                  
                     <div style={{marginTop:'50px' , direction:'rtl' , paddingRight:'10px'}}>
                          <span style={{color:'red'}}>*</span>
                          <span style={{ fontFamily: 'irsans'  ,     fontSize:'12px' ,  color: '#bababa',  textAlign:'justify', paddingRight:'14px'}}>
                               لطفا کد 5 رقمی ارسال شده به موبایل خود را وارد نمایید.
                          </span>
                     </div>
                    </Col>
                    <Col span={3}></Col>
                    </Row>
              

          </>
      
    );
}

export default Login;
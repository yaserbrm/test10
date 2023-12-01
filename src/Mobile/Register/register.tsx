import { Avatar, Button, Col, Input, InputRef, Row } from "antd";
import { UserOutlined , UploadOutlined   } from '@ant-design/icons';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import './../fonts/irsans.ttf';

import  './register.css';

const Register =() => {
    const inputFile = useRef<HTMLInputElement | null>(null);
    const inputElementCodeMeli = useRef<InputRef | null>(null);
    const [codeMeli, setCodeMeli] = useState("");
   // const [imageUrl, setImageUrl] = useState<File | null>(null);
    const [url, setUrl] = useState("");
   
    const handleImageUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.files != null) {
           
         //   var reader = new FileReader();
          //  const urlimage = reader.readAsDataURL(evt.target.files[0]);
            setUrl(URL.createObjectURL(evt.target.files[0]));
        }
      };

    const F_SelectFile= () =>{
        inputFile.current!.click();
      }

    const ChangeMobile = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setCodeMeli(e.target.value);
        }
      };

      let navigate = useNavigate();
      
      const F_Register= () =>{
        navigate('/dashbord');
      }
       
    return (
        <>
        <div style={{  marginTop:'50px' , display:'flex', flexDirection:'column', }}>
                <input accept="image/*"  onChange={ handleImageUpload} ref={inputFile}  type="file" id="file" style={{display: "none"}}/>
                <Row  style={{  textAlign:'center'}} dir="rtl">
                    
                    <Col span={24} >
                        {
                            url ? 
                            <Avatar
                            size={120}
                            src={url}
                        />
                        :
                        <Avatar
                        size={120}
                        icon={<UserOutlined/>}
                    />
                        }
                    
                    </Col>
                        
                </Row>
                <br />
                <Row  style={{  textAlign:'center'}} dir="rtl">
                    
                    <Col span={24} >
                       <Button  onClick={F_SelectFile}    style={{ width:'35%' , fontSize:'13px', fontFamily: 'irsans'  ,}} icon={<UploadOutlined  />}>انتخاب عکس</Button>
                    </Col>
                        
                </Row>
                <br /> <br /><br />
                <Row  style={{  textAlign:'center'}} dir="rtl">
                    
                    <Col span={24} >
                        <Input size="large" maxLength={30} style={{  width:'50%' ,fontSize:'13px',  fontFamily: 'irsans'  ,}} placeholder="نام" />
                    </Col>
                        
                </Row>
                <br /> 
                <Row  style={{  textAlign:'center'}} dir="rtl">
                    
                    <Col span={24} >
                        <Input size="large" maxLength={100} style={{ width:'50%' , fontSize:'13px', fontFamily: 'irsans'  ,}} placeholder="نام خانوادگی" />
                    </Col>
                        
                </Row>
                <br />  
                <Row  style={{  textAlign:'center'}} dir="rtl">
                    
                    <Col span={24} >
                       <Input ref={inputElementCodeMeli} style={{  width:'50%' , fontSize:'13px', fontFamily: 'irsans'  ,}} placeholder="کد ملی" size="large"  inputMode="numeric" value={codeMeli}  onKeyDown={(event)=>{  if (codeMeli.length  == 11 ) {  if(event.key === 'Backspace'){} else { event.preventDefault();}} else if( event.key === 'e' || event.key === 'E' || event.key === '-' || event.key === '+'|| event.key === '.') {event.preventDefault()} }} onChange={ChangeMobile}         />
                       
                    </Col>
                        
                </Row>
                <br /> 
                <Row  style={{  textAlign:'center'}} dir="rtl">
                    
                    <Col span={24} >
                        <Input size="large" maxLength={300} style={{  width:'50%' , fontSize:'13px',  fontFamily: 'irsans'  ,}} placeholder="آدرس" />
                    </Col>
                        
                </Row>

                <br /> 
                <Row  style={{  marginTop:'20px' ,  textAlign:'center'}} dir="rtl">
                    
                    <Col span={24} >
                        <Button onClick={F_Register} size="large" type="primary" block  style={{  width:'50%' ,fontFamily: 'irsans'  ,    fontSize:'14px',}} >   عضویت در کاسپین آبی   </Button>
                    </Col>
                        
                </Row>


               
        </div>
       
 
        </>
    );
}


export default Register;
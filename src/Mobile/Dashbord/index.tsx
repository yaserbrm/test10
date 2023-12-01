
import { Avatar, Segmented, Space , Drawer, Row, Col  } from 'antd';

import './../../Mobile/fonts/irsans.ttf';
import './dashbord.css';
import resturan from '../icon/resturan.png';
import cafe from '../icon/cafe.png';
import swim from '../icon/swim.png';
import gym from '../icon/gym.png';
import boling from '../icon/boling.png';
import bofe from '../icon/bofe.png';
import masaj from '../icon/masaj.png';
import logo from '../icon/logo.png';
import Header from './Header/header';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import  { InstagramOutlined ,WhatsAppOutlined, TwitterOutlined,} from '@ant-design/icons';

const Dashbord = () => {
    let navigate = useNavigate();

  
    
    const ChangeMenu=(value : number | string)=>{
         switch(value){
            case '1':
                navigate('/resturan'); return ;
            case '2':
                navigate('/cafe'); return ;
            case '6':
                navigate('/bofe'); return ;
            case '3':
                navigate('/pool'); return ;
            case '4':
                navigate('/bodybuilding'); return ;
            case '5':
                navigate('/boling'); return ;
            case '7':
                navigate('/masaj'); return ;
         }
    }

    return(
        <>
         
       

         <Header/>

         <div style={{display:'flex' ,flexDirection:'column' ,    marginTop:'40%' ,}}>
        
         <Row  style={{  textAlign:'center'}} dir="rtl">
            <Col span={24}>
            <div  >  <img src={logo} alt="" style={{ width:'220px', height:'55px'}} /></div>
            </Col>
          </Row>
          <Row  style={{  textAlign:'center'}} dir="rtl">
          <Col span={24}>
            <div style={{   marginTop:'45px' ,  fontFamily: 'irsans'  , fontSize:'12px', }}>  ساری - بلوار آزادی، خيابان رفاه،كوچه رفاه سوم</div>
            </Col>
          </Row>
          <Row  style={{  textAlign:'center'}} dir="rtl">
          <Col span={24}>
              <div style={{  marginTop:'30px' ,  fontFamily: 'irsans'  , fontSize:'20px', }}>   
              <InstagramOutlined style={{ marginRight:'10px'}} />
              <WhatsAppOutlined style={{ marginRight:'10px'}}/>
              <TwitterOutlined style={{ marginRight:'10px'}}/>
              </div>
            </Col>
          </Row>
          <Row  style={{  textAlign:'center'}} dir="rtl">
          <Col span={24}>
            <div style={{   marginTop:'9px' , fontFamily: 'irsans'  , fontSize:'12px',}}>
                       011-33350400
            </div>
            </Col>
          </Row>
           
           
        </div>
                
        <div className='fixedbutton'>
            <Segmented
            style={{background:'#e0e0e0' , borderRadius:'0px' , marginRight:'-2px'}}
                onChange={ChangeMenu}
                block
                defaultValue='0'
                options={[
                {
                label: (
                  <div
                    style={{
                        padding: 2, 
                        fontSize:'10px',
                        textAlign:'center',
                        fontFamily: 'irsans'  , 
                    }}
                    >
                    <Avatar src={masaj}  />
                    <div>ماساژ </div>
                    </div>
                ),
                value: '7',
                },
                {
                label: (
                    <div
                    style={{
                        padding: 2, 
                        fontSize:'10px',
                        textAlign:'center',
                        fontFamily: 'irsans'  , 
                    }}
                    >
                    
                    <Avatar src={bofe} />
                    <div>بوفه</div>  
                    </div>
                ),
                value: '6',
                },
                {
                label: (
                    <div
                    style={{
                        padding: 2, 
                        fontSize:'10px',
                        textAlign:'center',
                        fontFamily: 'irsans'  , 
                    }}
                    >
                     
                     <Avatar src={boling} />
                    <div>بولینگ</div>
                    </div>
                ),
                value: '5',
                },
                {
                    label: (
                        <div
                        style={{
                            padding: 2, 
                            fontSize:'10px',
                            textAlign:'center',
                            fontFamily: 'irsans'  , 
                        }}
                        >
                        <Avatar src={gym} />
                        <div>بدنسازی</div>
                        </div>
                    ),
                    value: '4',
                    },
                    {
                        label: (
                            <div
                            style={{
                                padding: 2, 
                                fontSize:'10px',
                                textAlign:'center',
                                fontFamily: 'irsans'  , 
                            }}
                            >
                            <Avatar src={swim}  />
                             <div> استخر</div>
                            </div>
                        ),
                        value: '3',
                        },
                        {
                            label: (
                                <div
                                style={{
                                    padding: 2, 
                                    fontSize:'10px',
                                    textAlign:'center',
                                    fontFamily: 'irsans'  , 
                                }}
                                >
                                 <Avatar src={cafe}  />
                                <div>کافه</div>
                                </div>
                            ),
                            value: '2',
                            },
                        {
                            label: (
                                <div
                                style={{
                                    padding: 1,
                                    paddingTop:2,
                                    fontSize:'10px',
                                    textAlign:'right',
                                    fontFamily: 'irsans'  , 
                                }}
                                >
                                 <Avatar src={resturan}  />
                                <div style={{  paddingLeft:'-5px',}}>رستوران</div>
                                </div>
                            ),
                            value: '1',
                            },
                    ]}
                />
        </div>
    
        </>
    );
}


export default Dashbord;
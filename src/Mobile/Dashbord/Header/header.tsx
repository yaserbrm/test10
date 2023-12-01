

import { Col, Row , Input , Badge , InputRef, Drawer } from 'antd';
import { MenuOutlined  , ShoppingCartOutlined , MailOutlined, BellOutlined} from '@ant-design/icons';
import { Avatar } from 'antd';
import jef from '../../images/my.jpg';
import { useState } from 'react';
 
 
import './../../fonts/irsans.ttf';
import './header.css';


const Header =() => {

    const [open, setOpen] = useState(false);
    const [badgeMessage, setBadgeMessage] = useState("2");
    const [badgeAlert, setBadgeAlert] = useState("4");
    
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
    
    return (
        <>
          <Drawer title="کاسپین آبی" style={{ fontFamily:'irsans', fontSize:'15px'}} bodyStyle={{textAlign:'right', fontFamily:'irsans', fontSize:'15px'}} headerStyle={{textAlign:'right'}} width={200} placement="right" onClose={onClose} open={open}>
                <p style={{ fontFamily:'irsans', fontSize:'14px'}}>پروفایل</p>
                <p style={{ fontFamily:'irsans', fontSize:'14px'}}> <span style={{marginRight:'7.5%'}}><Badge size={"small"} count={badgeMessage} /></span>  پیام ها   </p>
                <p style={{ fontFamily:'irsans', fontSize:'14px'}} ><span style={{marginRight:'5%'}}><Badge size={"small"} count={badgeAlert} /></span> اعلانات </p>
                <p style={{ fontFamily:'irsans', fontSize:'14px'}}>مشاهده تراکنش ها</p>
                <p style={{ fontFamily:'irsans', fontSize:'14px'}}>درباره کاسپین ابی</p>
         </Drawer>
         <div className="Header">

                <Row>
                    <Col span={9} style={{textAlign:'left' , paddingLeft:'5px' , paddingTop:'7px' , }}>
                    <Badge count={5} size='small'  offset={[0,  -2]} ><BellOutlined   style={{   fontSize:'17px' ,  fontWeight:'600' , paddingLeft:'5px'  }}/></Badge>
                    <Badge count={0} size='small'  offset={[-7,  0]} ><MailOutlined    style={{  paddingRight:'12px' ,  fontWeight:'600' ,paddingLeft:'12px' , fontSize:'17px'  }}/></Badge>
                    <Badge count={2} size='small'  offset={[-8,   1]} ><ShoppingCartOutlined     style={{  paddingRight:'12px' , fontWeight:'600' , fontSize:'18px'  }} /></Badge>
                    </Col>
                    <Col span={6} style={{ textAlign:'center', paddingTop:'5px' , paddingRight:'5px'}} >
                    <Avatar
                        size={80}          
                         src={jef}
                         className="BoxShadow"
                    />
                    </Col>
                    <Col span={9} style={{textAlign:'right' , paddingRight:'10px' , paddingTop:'7px' , }}>
                        <span  style={{  paddingRight:'10px' ,    color: '#1f1f1f' ,   fontFamily: 'irsans'  , fontSize:'13px' , }}>
                            محمد رحیمی
                        </span>
                        <MenuOutlined  onClick={showDrawer} style={{   fontSize:'17px' ,  fontWeight:'600' }} />
                       
                    </Col>
                </Row>


         </div>

        </>
    );


}


export default Header;
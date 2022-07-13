import React from 'react'
import { Row, Col, Typography} from 'antd';
import Moviecard from './Moviecard';


function Card() {
  return (
    <div>
       <Typography.Title level={2} style={{textAlign:"center",margin:"60px 0px 0px 0px"}}>Movie Mania</Typography.Title>
      
        <Row className='center'>
        <Col>
           <Moviecard/>
        </Col>
      </Row>
      
    </div>
  )
}

export default Card
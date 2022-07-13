import { Card } from 'antd';
import {Typography} from "antd"
import React from 'react';
import Click from './Click';
import { Link } from 'react-router-dom';
import {Row,Col} from "antd"
;

const { Meta } = Card;

const Moviecard = () => (

  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://thumbs.dreamstime.com/b/film-movie-cinematography-rating-review-vector-illustration-flat-cartoon-rate-stars-strip-clapper-board-concept-170697883.jpg"
      />
    }
    
  >
    <Typography.Title level={3} style={{ margin: 0 }}>
        Movie Review
      </Typography.Title>
    <Typography.Title level={5} style={{ margin: 0 }}>
      Rate your favourite movies and provide valuable feedback.
    </Typography.Title>
    {/* <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Movie Review"
      description="This is the description"
    /> */}
    <Row>
      <Col span={24} style={{margin:"10px 0px 0px 0px"}}>
      <Link to="/form">
        <Click />
      </Link>
      </Col>
      
    </Row>
    
  </Card>
  
);

export default Moviecard;
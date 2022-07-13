import { Button, Form, Input, Select } from 'antd';
import { Avatar, Comment, Tooltip } from 'antd';
import { Divider } from 'antd';
import { useState } from 'react';
import "./Form.css";
import {Typography} from "antd"
import React from 'react';
import { Rate } from 'antd';
import {Row,Col} from "antd"
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ReviewForm = ({getcomments,xd}) => {
  
  const [form] = Form.useForm();
  const [name, setname] = useState("")
  const [feedback, setfeedback] = useState("")
  const [gender, setgender] = useState("")
  const [rating, setrating] = useState(1)
  const [comments, setcomments] = useState({})
  const [arr,setarr] = useState([])
  const onGenderChange = (value) => {
    setgender(value)
   
};
  
  const onFinish = (values) => {
    let a = {"Name":name,"Feedback":feedback,"Gender":gender,"Rating":rating}
     setarr([...arr,a])
     console.log(values)
     getcomments(arr)
};

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  
  
  return (
    <>
    <div style={{textAlign : 'center', margin:"120px 0px 0px 0px"}}>
    <Typography.Title level={3}>Review Form</Typography.Title>
    </div>

    
    <Form   {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={(e) => setname(e.target.value)}/>
      </Form.Item>
      <Form.Item
        name="Feedback"
        label="Feedback"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea  onChange={(e) => setfeedback(e.target.value)}  rows={6}/>
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
         
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
      <Form.Item
        name="Rating"
        label="Rating"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Rate onChange={(value) => {
        setrating(value)
      }} value={rating} />
      </Form.Item> 
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Row>
          <Col span={12}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
          </Col>
          <Col span={12}>
          <Button htmlType="button" onClick={onReset}>
          Reset
          </Button>
          </Col>
        </Row>
        </Form.Item>
    </Form>
  {
      arr.length == 0 ? <Typography.Title level={3} style={{textAlign:"center",margin:"100px"}}>No Comments yet.</Typography.Title> : 
      arr.map(el => {
        return(
          <div className='comment'>
          <Comment
        
        author={<Typography.Text strong>{el.Name}</Typography.Text>}
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={
        <p>
          {el.Feedback}
          
        </p>
        }
      
      />
      <div>
      <Typography.Text>Gender : {el.Gender}</Typography.Text>
      </div>
      <div>
      <Typography.Text>Rating: </Typography.Text>
      <Rate count={el.Rating} value={el.Rating} style={{width:"20%"}}/>
      </div>
      <Divider/>
      </div>
        )
      })

    }
    
    </>
  );
};

export default ReviewForm;
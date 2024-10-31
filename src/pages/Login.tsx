import type { FormProps } from 'antd';
import { Button, Flex, Form, Input, Layout } from 'antd';
import { appContext } from '../context/appContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { Content } = Layout;
  const {isAuthenticated, login} = useContext(appContext);
  const navigate = useNavigate();

  type FieldType = {
    username?: string;
    password?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    login();    
    if(isAuthenticated) {      
      return navigate("/dashboard", { replace: true });
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
  };
  const contentStyle = {
    margin: '0 auto',
    minHeight: '100vh',
    maxWidth: '1600px',
    display: 'flex',  
  }
  return (
    <Layout style={layoutStyle}>
      
      <Content style={contentStyle}>
      <Flex vertical justify='center'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>   

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Flex>
      </Content>
         
    </Layout>
    
    
  )
}

import React, {useState} from 'react';
import 'antd/dist/antd.css'
import '../static/css/login.css'
import {Card, Input, Button, Spin} from 'antd'
import {UserOutlined} from '@ant-design/icons'

function Login() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const checkLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="login-div">
      <Spin tip="正在登录..." spinning={isLoading}>
        <Card title='BLOG ADMIN' bordered={true} style={{width:400}}>
          <Input 
            id="userName"
            size="large"
            placeholder="Enter your username"
            prefix={<UserOutlined />}
            onChange={(e) => {setUserName(e.target.value)}}/>
          <br/><br/>
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            onChange={(e) => {setPassword(e.target.value)}}/>
          <br/><br/>
          <Button type='primary' size='large' block onClick={checkLogin}>登 录</Button>
        </Card>
      </Spin>
    </div>
  )
}

export default Login
import React, {useState} from 'react';
import 'antd/dist/antd.css'
import '../static/css/login.css'
import {Card, Input, Button, Spin, message} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import servicePath from '../config/apiUrl';
import axios from 'axios'

function Login(props) {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const checkLogin = () => {
    setIsLoading(true)
    if (!userName) {
      message.error('用户名不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return false
    } else if (!password) {
      message.error('密码不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return false
    }
    let dataProps = {
      'userName': userName,
      'password': password
    }

    axios({
      method: 'post',
      url: servicePath.checkLogin,
      data: dataProps,
      withCredentials: true
    }).then((res) => {
      setIsLoading(false)
      if (res.data.data === '登录成功') {
        localStorage.setItem('openId', res.data.openId)
        props.history.push('/index')
      } else {
        message.error('登录失败')
      }
    }).catch(() => {
      setIsLoading(false)
    })
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
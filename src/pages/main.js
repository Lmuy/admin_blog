import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login'
import AdminIndex from './adminIndex'

function Main() {
  return (
    <Router>
      <Route path='/login/' exact component={Login} />
      <Route path='/index/' component={AdminIndex} /> 
      {/* 子路由内不能添加exact */}
    </Router>
  )
}

export default Main
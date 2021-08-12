let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
  checkLogin: ipUrl + 'checkLogin', // 登录
  getTypeInfo: ipUrl + 'getTypeInfo', // 获取文章类别信息
  addArticle: ipUrl + 'addArticle', // 添加文章
  updateArticle: ipUrl + 'updateArticle', // 编辑文章
}

export default servicePath
import express from 'express'
import renderENVConfig from '../config/env'
import initMiddleware from './middleware'
import connectDataBase from './middleware/dataBaseConnect'
const app = express()
// 加载环境变量
renderENVConfig()
// 挂载中间件
initMiddleware(app)
// 数据库连接
connectDataBase()
app.use('*', async (req, res) => {
  // 默认跳转欢迎页面
  res.redirect(301, '/welcome')
})

const PORT = process.env.PORT ?? 8080
app.listen(PORT, () => {
  // 开发环境说明
  console.log(`本地开发运行在: http://localhost:${PORT}`, 'color:red')
})

import { Router } from 'express'
const goodsRouters = Router()
goodsRouters.get('/goods', async (req, res) => {
  // @ts-ignore
  console.log(req)
  res.send('这是商品信息测试')
})
export default goodsRouters

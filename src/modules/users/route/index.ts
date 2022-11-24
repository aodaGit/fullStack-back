import { Router } from 'express'
const usersRouters = Router()
usersRouters.get('/user/:id', async (req, res) => {
  res.send('这是用户信息')
})
export default usersRouters

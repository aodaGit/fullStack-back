import { Express } from 'express'
import { expressjwt } from 'express-jwt'
import { noTokenRouters } from '../routes'
export const SCRECT_KEY = 'aoda_backend'

const jwtAuth = (app: Express) => {
  app.use(
    expressjwt({
      secret: SCRECT_KEY,
      algorithms: ['HS256'] // 使用何种加密算法解析
    }).unless({ path: noTokenRouters }) // 无需验证token的路由
  )
}
export default jwtAuth

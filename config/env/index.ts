import * as dotenv from 'dotenv'
import path from 'path'
const renderENVConfig = () => {
  dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
  })
}
export default renderENVConfig

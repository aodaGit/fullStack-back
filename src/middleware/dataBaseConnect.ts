import mongoose from 'mongoose'
const connectDataBase = () => {
  const dataBaseURL = process.env.DATABASE_URL ?? ''
  mongoose.connect(dataBaseURL)
  const dataBaseConnect = mongoose.connection
  dataBaseConnect.on('error', error => {
    console.error(`数据库连接出错:${error}`, 'color: red;')
  })
  dataBaseConnect.once('connected', () => {
    console.log('数据库连接成功', 'color: green;')
  })
}
export default connectDataBase

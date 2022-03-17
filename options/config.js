import 'dotenv/config'

export default {
    mongodb: JSON.parse(process.env.MONGODB),
    firebase: JSON.parse(process.env.FIREBASE)
}
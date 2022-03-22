import 'dotenv/config'

export default {
    mongodb: process.env.MONGODB ? JSON.parse(process.env.MONGODB) : "mongodb+srv://admin:admin@cluster0.msysu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    //firebase: JSON.parse(process.env.FIREBASE)
}
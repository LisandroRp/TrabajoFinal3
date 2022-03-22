import 'dotenv/config'

export default {
/*     mongodb: JSON.parse(process.env.MONGODB),
    firebase: JSON.parse(process.env.FIREBASE) */
    mongodb:  {
        cnxStr:"mongodb+srv://admin:admin@cluster0.msysu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        options:{"useNewUrlParser": true,"useUnifiedTopology":true,"serverSelectionTimeoutMS":5000}
    },
    //firebase: JSON.parse(process.env.FIREBASE)
}
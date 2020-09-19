//mongodb+srv://admin:<password>@cluster0.vv2ic.mongodb.net/<dbname>?retryWrites=true&w=majority


const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')


const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useFindAndModify: false,
	    useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('MongoDB Connected')
    } catch (err) {

        // Exit process with failure
        process.exit(1)

    }
}

module.exports = connectDB

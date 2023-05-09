const mongoose = require("mongoose")

const connectDatabase =async  () => {

    await mongoose.connect(process.env.MONGO_URI ,{useNewUrlParser : true, useUnifiedTopology: true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase

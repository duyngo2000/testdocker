const mongoose = require('mongoose')

async function ConnectDB(mongoURL){
    try{
        await mongoose.connect(mongoURL),{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        console.log(`connect succes ${mongoURL}`)
    }
    catch(err)
    {
        console.log(`err => ${err}`)
    }
}

module.exports = ConnectDB
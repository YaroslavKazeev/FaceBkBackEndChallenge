const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://XXX:XXX@cluster0.zzdkhgp.mongodb.net/')
.then(()=> console.log('DB is connected'))
.catch(err=> console.log(err))
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI ||"mongodb+srv://anota:anota1311@sm51.vgq3v.mongodb.net/flores?authSource=admin&replicaSet=atlas-lv3vzg-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.connect(MONGODB_URI,{
useUnifiedTopology: true,
useNewUrlParser: true
})

.then(db => console.log('Database is connected'))
.catch(err => console.log (Error));

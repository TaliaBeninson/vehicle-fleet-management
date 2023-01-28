const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/vehiclefleet', {
    // useNewUrlParser: true,
    // useCreateIndex: false,
    // useFindAndModify: false,
    // useUnifiedTopology: true
})
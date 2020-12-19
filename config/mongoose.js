const mongoose = require('mongoose');
      
//Mongoose setup 
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Mongoose connection successful'))
.catch(err => console.error(err));

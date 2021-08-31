import { connect } from 'mongoose';

connect(process.env.MONGODB_URI!, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('Mongoose connected.'))
.catch(err => console.error(err));


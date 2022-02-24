import mongose from 'mongoose';

const Schema = mongose.Schema;

const Admin = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

mongose.models = {};

export default mongose.model('Admin', Admin);

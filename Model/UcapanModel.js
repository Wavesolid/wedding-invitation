import mongose from 'mongoose';

const Schema = mongose.Schema;

const Ucapan = new Schema({
    guestName: {
        type: String,
        required: true
    },
    domisili: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

mongose.models = {};

export default mongose.model('Ucapan', Ucapan);
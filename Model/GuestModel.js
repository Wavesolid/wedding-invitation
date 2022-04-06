import mongose from 'mongoose';

const Schema = mongose.Schema;

const Guest = new Schema({
    name: {
        type: String,
        required: true
    },
    totalPerson: {
        type: Number,
        required: true
    },
    email: {
        type: String
    },
    waNumber: {
        type: String
    },
    isFilled:{
        type: Boolean,
        required: true
    },
    seatNumber: {
        type: String
    },
    isCheckIn: {
        type: Boolean
    },
    checkInTime: {
        type: Date
    },
    totalSouvenir: {
        type: String
    },
    emailCount: {
        type: Number
    }
}, {
    timestamps: true
});

mongose.models = {};

export default mongose.model('Guest', Guest);


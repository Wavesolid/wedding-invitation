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
    }
}, {
    timestamps: true
});

mongose.models = {};

export default mongose.model('Guest', Guest);


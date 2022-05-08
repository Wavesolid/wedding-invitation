import connectDB from '../../../helper/connectDB';
import UcapanModel from '../../../Model/UcapanModel';
import GuestModel from '../../../Model/GuestModel';


async function UcapanHandler(req, res)
{
    switch(req.method) 
    {
        case 'GET': 
            {
                const data = await UcapanModel.find({});
                return res.status(201).json({
                    ucapan: data
                })
            }
        case 'POST':
            {
                const guest = await GuestModel.findOne({name: req.query.ucapan}).exec();
                console.log( req.query.ucapan);
                console.log(guest);
                try{
                    if(guest) {
                        const {guestName} = req.body;
                        const newUcapan = await UcapanModel.findOne({guestName}).exec();
                        if(newUcapan){
                            return res.status(201).json({
                                messages: "Anda sudah menulis ucapan"
                            })
                        }
                        await new UcapanModel(req.body).save();
                        return res.status(201).json({
                            messages: "Terima kasih sudah menulis ucapan"
                        })
                    }
                    return res.status(201).json({
                        messages: "Nama anda tidak terdaftar"
                    })
                } catch(err) {
                    return res.status(400).json({
                        message: err.message
                    })
                }
            }
        case 'PUT':
            {
                console.log('put');
                break;
            }
        case 'DELETE':
            {
                console.log('delete');
                break;
            }
    }
}

export default connectDB(UcapanHandler);
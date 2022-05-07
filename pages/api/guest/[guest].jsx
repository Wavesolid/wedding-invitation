import connectDB from '../../../helper/connectDB';
import GuestModel from '../../../Model/GuestModel';
import guestModel from '../../../Model/GuestModel';

const slug = (string) => {
    const regex = /\s/g;
    return string.replace(regex, '-').toLowerCase();
}
async function guest(req, res)
{
    switch(req.method) 
    {
        case 'GET': 
            {
                const guest = await guestModel.findOne({slug: req.query.guest}).exec();
                return res.status(201).json({
                    data: guest
                })
            }
        case 'POST':
            {
                const guest = await guestModel.findOne({name: req.query.guest}).exec();
                try{
                    if(guest) {
                        return res.status(200).json({
                            message: 'Nama tersebut sudah terdaftar.'
                        })
                    } 
                    await new GuestModel({
                        ...req.body,
                        slug: slug(req.body.name)
                    }).save();

                    return res.status(201).json({
                        message: `Tamu atas nama ${req.query.guest} berhasil dibuat.`
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

export default connectDB(guest);
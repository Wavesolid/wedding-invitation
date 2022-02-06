import connectDB from '../../../helper/connectDB';
import guestModel from '../../../Model/GuestModel';

async function guest(req, res)
{
    switch(req.method) 
    {
        case 'GET': 
            {
                const guest = await guestModel.findOne({name: req.query.guest}).exec();
                return res.status(201).json({
                    data: guest
                })
            }
        case 'POST':
            {
                console.log('post');
                break;
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
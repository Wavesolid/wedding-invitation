import connectDB from '../../helper/connectDB';
import guestModel from '../../Model/GuestModel';

async function checkInHandler(req, res)
{
    switch(req.method) 
    {
        case 'GET': 
            {
                break;
            }
        case 'POST':
            {
                break;
            }
        case 'PUT':
            {
                let {name, isCheckIn, checkInTime} = req.body;
                const guest = await guestModel.findOneAndUpdate({
                    name
                }, {
                    isCheckIn,
                    checkInTime
                },{
                    new: true
                }); 
                return res.status(201).json({
                    data: guest
                })
            }
        case 'DELETE':
            {
                console.log('delete');
                break;
            }
    }
}

export default connectDB(checkInHandler);
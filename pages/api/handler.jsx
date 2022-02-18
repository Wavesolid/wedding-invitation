import connectDB from '../../helper/connectDB';
import guestModel from '../../Model/GuestModel';

async function Handler(req, res)
{
    switch(req.method) 
    {
        case 'GET': 
            {
                const data = await guestModel.find({});
                return res.status(201).json({
                    dataGuest: data
                })
            }
        case 'POST':
            {
                break;
            }
        case 'PUT':
            {
                const {name, isFilled, totalPerson, email, waNumber} = req.body;
                const guest = await guestModel.findOneAndUpdate({
                    name
                }, {
                    totalPerson,
                    email,
                    waNumber,
                    isFilled
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

export default connectDB(Handler);
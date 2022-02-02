import connectDB from '../../helper/connectDB';
import guestModel from '../../Model/GuestModel';


async function Handler(req, res)
{
    switch(req.method) 
    {
        case 'GET': 
            {
                console.log('get');
                break;
            }
        case 'POST':
            {
                console.log(req.body.name);
                const {name, totalPerson, email, waNumber} = req.body;
                const newGuest = new guestModel({
                    name,
                    totalPerson,
                    email,
                    waNumber
                });
                await newGuest.save()
                return res.status(201).json({
                    message: "Data registered"
                })
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

export default connectDB(Handler);
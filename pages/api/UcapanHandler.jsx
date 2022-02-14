import connectDB from '../../helper/connectDB';
import UcapanModel from '../../Model/UcapanModel';


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
                console.log('POST');
                break;
            }
        case 'PUT':
            {
                const {name, displayName, domisili, message} = req.body;
                const newUcapan = await UcapanModel.findOneAndUpdate({
                    name
                },  {
                    displayName,
                    domisili,
                    message
                }, {
                    new: true
                });
                return res.status(201).json({
                    data: newUcapan
                })
            }
        case 'DELETE':
            {
                console.log('delete');
                break;
            }
    }
}

export default connectDB(UcapanHandler);
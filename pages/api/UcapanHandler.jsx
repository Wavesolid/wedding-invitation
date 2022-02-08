import connectDB from '../../helper/connectDB';
import UcapanModel from '../../Model/UcapanModel';


async function UcapanHandler(req, res)
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
                const {name, displayName, domisili, message} = req.body;
                const newUcapan = new UcapanModel({
                    name,
                    displayName,
                    domisili,
                    message
                });
                await newUcapan.save()
                return res.status(201).json({
                    message: "Ucapan Berhasil terkirim"
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

export default connectDB(UcapanHandler);
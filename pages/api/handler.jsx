import connectDB from '../../helper/connectDB';
const objectId = require('mongodb').ObjectId;

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

export default connectDB(Handler);